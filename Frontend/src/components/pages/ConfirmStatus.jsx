export default function ConfirmDialog({
    cancelLabel = "Cancel",
    confirmColor = "bg-blue-600 hover:bg-blue-700", // default style
    onConfirm,
    onCancel,
    label
  }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 w-96">
          <h2 className="text-lg font-semibold text-gray-800">{label?.heading}</h2>
          <p className="text-sm text-gray-600 mt-2">{label?.message}</p>
  
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className={`px-4 py-2 rounded-lg text-white ${confirmColor}`}
            >
              {label?.button}
            </button>
          </div>
        </div>
      </div>
    );
  }
  