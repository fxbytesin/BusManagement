import { Edit, Plus, Trash2, User, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import ApiService from "../../services/api";
import DataPagination from "./DataPagination";
import SortColumn from "./SortColumn";
import ConfirmDelete from "./ConfirmDelete";

const UserManagement = ({
  setModalType,
  setShowModal,
  t,
  users,
  buses,
  setBuses,
  setUsers,
  handleEditUser,
  handleDeleteUser,
}) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ASC",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  //  New state for delete modal
  const [deleteUserId, setDeleteUserId] = useState(null);

  const getData = async () => {
    try {
      const body = {
        search,
        limit: 10,
        page,
        order: sortDescriptor.direction,
        orderColumn: sortDescriptor.column,
      };
      setLoading(true);
      const response = await ApiService.getUser(body);
      setUsers(response?.data?.data || []);
      setTotalPages(response?.data?.pagination?.totalPages || 1);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, sortDescriptor]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleSorting = (column) => {
    setSortDescriptor((prevDescriptor) => {
      if (prevDescriptor.column === column) {
        return {
          ...prevDescriptor,
          direction:
            prevDescriptor.direction === "ASC" ? "DESC" : "ASC",
        };
      } else {
        return {
          column: column,
          direction: "DESC",
        };
      }
    });
  };

  const handlePageChange = (newPage) => setPage(newPage);

  // 🔴Confirm delete handler
  const confirmDelete = () => {
    handleDeleteUser(deleteUserId);
    setUsers(users.filter((d) => d.id !== deleteUserId));
    setBuses(
      buses?.map((bus) =>
        bus.userId === deleteUserId ? { ...bus, userId: "" } : bus
      )
    );
    setDeleteUserId(null);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{t("userManagement")}</h3>
        <div className="flex">
          <form className="flex max-w-lg mx-auto mr-6">
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5"
              placeholder={t("search") || "Search..."}
              onChange={handleChange}
            />
          </form>
          <button
            onClick={() => {
              setModalType("add-user");
              setShowModal(true);
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
          >
            <Plus className="w-5 h-5" />
            <span>{t("addNewUser")}</span>
          </button>
        </div>
      </div>

      {/* Table or No Data */}
      {Array.isArray(users) && users.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t("noUserFound")}
          </h3>
          <p className="text-gray-500 mb-4">{t("addNewUser")}</p>
          <button
            onClick={() => {
              setModalType("add-user");
              setShowModal(true);
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            {t("addNewUser")}
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {/* Name */}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("name")}
                >
                  <div className="flex">
                    {t("name")}
                    <SortColumn sortDescriptor={sortDescriptor} name="name" />
                  </div>
                </th>
                {/* Phone */}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("phone")}
                >
                  <div className="flex">
                    {t("phone")}
                    <SortColumn sortDescriptor={sortDescriptor} name="phone" />
                  </div>
                </th>
                {/* Role */}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("role")}
                >
                  <div className="flex">
                    {t("role")}
                    <SortColumn sortDescriptor={sortDescriptor} name="role" />
                  </div>
                </th>
                {/* License */}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("license_number")}
                >
                  <div className="flex">
                    {t("license")}
                    <SortColumn
                      sortDescriptor={sortDescriptor}
                      name="license_number"
                    />
                  </div>
                </th>
                {/* Experience */}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={() => handleSorting("experience_years")}
                >
                  <div className="flex">
                    {t("experience")}
                    <SortColumn
                      sortDescriptor={sortDescriptor}
                      name="experience_years"
                    />
                  </div>
                </th>
                {/* Actions */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("actions")}
                </th>
              </tr>
            </thead>

            {loading ? (
              <tr>
                <td colSpan={9} className="py-10">
                  <div className="flex justify-center items-center w-full">
                    <Loader />
                  </div>
                </td>
              </tr>
            ) : users.length > 0 ? (
              <tbody className="bg-white divide-y divide-gray-200">
                {users?.map((user) => (
                  <tr key={user.id}>
                    {/* Name */}
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {user.name}
                    </td>
                    {/* Phone */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.phone}
                    </td>
                    {/* Role */}
                    <td className="px-6 py-4 whitespace-nowrap capitalize">
                      {user.role}
                    </td>
                    {/* License (only for driver) */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.role === "driver"
                        ? user.userExtra?.license_number || "-"
                        : "-"}
                    </td>
                    {/* Experience Years */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.userExtra?.experience_years ?? "-"}
                    </td>
                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleEditUser(user)}
                          title={t("edit")}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteUserId(user.id)}
                          className="text-red-600 hover:text-red-900"
                          title={t("delete")}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="py-10 text-center text-gray-500 italic"
                >
                  {t("noDataFound")}
                </td>
              </tr>
            )}
          </table>

          {users && users.length > 0 && (
            <DataPagination
              onPageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={page}
            />
          )}
        </div>
      )}

      {/*  Confirm Delete Modal */}
      {deleteUserId && (
        <ConfirmDelete
          t={t}
          message={t("confirmDeleteUser")}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteUserId(null)}
        />
      )}
    </div>
  );
};

export default UserManagement;
