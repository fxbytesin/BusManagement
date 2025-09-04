
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model POSMachine
 * 
 */
export type POSMachine = $Result.DefaultSelection<Prisma.$POSMachinePayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserExtra
 * 
 */
export type UserExtra = $Result.DefaultSelection<Prisma.$UserExtraPayload>
/**
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BusStatus: {
  running: 'running',
  stopped: 'stopped',
  maintenance: 'maintenance'
};

export type BusStatus = (typeof BusStatus)[keyof typeof BusStatus]


export const PackageStatus: {
  booked: 'booked',
  in_transit: 'in_transit',
  delivered: 'delivered',
  cancelled: 'cancelled'
};

export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus]


export const POSStatus: {
  active: 'active',
  maintenance: 'maintenance',
  inactive: 'inactive'
};

export type POSStatus = (typeof POSStatus)[keyof typeof POSStatus]


export const PassengerType: {
  general: 'general',
  student: 'student',
  senior: 'senior',
  disabled: 'disabled'
};

export type PassengerType = (typeof PassengerType)[keyof typeof PassengerType]


export const TicketStatus: {
  booked: 'booked',
  used: 'used',
  cancelled: 'cancelled'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const PaymentMode: {
  cash: 'cash',
  online: 'online'
};

export type PaymentMode = (typeof PaymentMode)[keyof typeof PaymentMode]


export const TripStatus: {
  SCHEDULED: 'SCHEDULED',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]


export const OTPType: {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type OTPType = (typeof OTPType)[keyof typeof OTPType]


export const Role: {
  owner: 'owner',
  admin: 'admin',
  conductor: 'conductor',
  driver: 'driver'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type BusStatus = $Enums.BusStatus

export const BusStatus: typeof $Enums.BusStatus

export type PackageStatus = $Enums.PackageStatus

export const PackageStatus: typeof $Enums.PackageStatus

export type POSStatus = $Enums.POSStatus

export const POSStatus: typeof $Enums.POSStatus

export type PassengerType = $Enums.PassengerType

export const PassengerType: typeof $Enums.PassengerType

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type PaymentMode = $Enums.PaymentMode

export const PaymentMode: typeof $Enums.PaymentMode

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

export type OTPType = $Enums.OTPType

export const OTPType: typeof $Enums.OTPType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Buses
 * const buses = await prisma.bus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Buses
   * const buses = await prisma.bus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pOSMachine`: Exposes CRUD operations for the **POSMachine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POSMachines
    * const pOSMachines = await prisma.pOSMachine.findMany()
    * ```
    */
  get pOSMachine(): Prisma.POSMachineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userExtra`: Exposes CRUD operations for the **UserExtra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExtras
    * const userExtras = await prisma.userExtra.findMany()
    * ```
    */
  get userExtra(): Prisma.UserExtraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bus: 'Bus',
    Package: 'Package',
    POSMachine: 'POSMachine',
    DailyReport: 'DailyReport',
    Route: 'Route',
    Ticket: 'Ticket',
    Trip: 'Trip',
    User: 'User',
    UserExtra: 'UserExtra',
    OTP: 'OTP'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bus" | "package" | "pOSMachine" | "dailyReport" | "route" | "ticket" | "trip" | "user" | "userExtra" | "oTP"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      POSMachine: {
        payload: Prisma.$POSMachinePayload<ExtArgs>
        fields: Prisma.POSMachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POSMachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POSMachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          findFirst: {
            args: Prisma.POSMachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POSMachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          findMany: {
            args: Prisma.POSMachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>[]
          }
          create: {
            args: Prisma.POSMachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          createMany: {
            args: Prisma.POSMachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.POSMachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          update: {
            args: Prisma.POSMachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          deleteMany: {
            args: Prisma.POSMachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POSMachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.POSMachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSMachinePayload>
          }
          aggregate: {
            args: Prisma.POSMachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOSMachine>
          }
          groupBy: {
            args: Prisma.POSMachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<POSMachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.POSMachineCountArgs<ExtArgs>
            result: $Utils.Optional<POSMachineCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserExtra: {
        payload: Prisma.$UserExtraPayload<ExtArgs>
        fields: Prisma.UserExtraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExtraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExtraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          findFirst: {
            args: Prisma.UserExtraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExtraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          findMany: {
            args: Prisma.UserExtraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>[]
          }
          create: {
            args: Prisma.UserExtraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          createMany: {
            args: Prisma.UserExtraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserExtraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          update: {
            args: Prisma.UserExtraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          deleteMany: {
            args: Prisma.UserExtraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExtraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExtraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExtraPayload>
          }
          aggregate: {
            args: Prisma.UserExtraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExtra>
          }
          groupBy: {
            args: Prisma.UserExtraGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExtraGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExtraCountArgs<ExtArgs>
            result: $Utils.Optional<UserExtraCountAggregateOutputType> | number
          }
        }
      }
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bus?: BusOmit
    package?: PackageOmit
    pOSMachine?: POSMachineOmit
    dailyReport?: DailyReportOmit
    route?: RouteOmit
    ticket?: TicketOmit
    trip?: TripOmit
    user?: UserOmit
    userExtra?: UserExtraOmit
    oTP?: OTPOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    tickets: number
    packages: number
    dailyReports: number
    posMachines: number
    trips: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | BusCountOutputTypeCountTicketsArgs
    packages?: boolean | BusCountOutputTypeCountPackagesArgs
    dailyReports?: boolean | BusCountOutputTypeCountDailyReportsArgs
    posMachines?: boolean | BusCountOutputTypeCountPosMachinesArgs
    trips?: boolean | BusCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountPosMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSMachineWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type POSMachineCountOutputType
   */

  export type POSMachineCountOutputType = {
    tickets: number
  }

  export type POSMachineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | POSMachineCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * POSMachineCountOutputType without action
   */
  export type POSMachineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachineCountOutputType
     */
    select?: POSMachineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * POSMachineCountOutputType without action
   */
  export type POSMachineCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    buses: number
    trips: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | RouteCountOutputTypeCountBusesArgs
    trips?: boolean | RouteCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    tickets: number
    packages: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TripCountOutputTypeCountTicketsArgs
    packages?: boolean | TripCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    busesDriven: number
    busesConducted: number
    tripsDriven: number
    tripsConducted: number
    routes: number
    buses: number
    otps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busesDriven?: boolean | UserCountOutputTypeCountBusesDrivenArgs
    busesConducted?: boolean | UserCountOutputTypeCountBusesConductedArgs
    tripsDriven?: boolean | UserCountOutputTypeCountTripsDrivenArgs
    tripsConducted?: boolean | UserCountOutputTypeCountTripsConductedArgs
    routes?: boolean | UserCountOutputTypeCountRoutesArgs
    buses?: boolean | UserCountOutputTypeCountBusesArgs
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusesDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusesConductedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsConductedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    capacity: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
    fuel_level: Decimal | null
  }

  export type BusSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    capacity: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
    fuel_level: Decimal | null
  }

  export type BusMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bus_number: string | null
    capacity: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
    status: $Enums.BusStatus | null
    current_location: string | null
    fuel_level: Decimal | null
    last_maintenance: Date | null
    insurance_expiry: Date | null
    permit_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BusMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bus_number: string | null
    capacity: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
    status: $Enums.BusStatus | null
    current_location: string | null
    fuel_level: Decimal | null
    last_maintenance: Date | null
    insurance_expiry: Date | null
    permit_expiry: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    user_id: number
    bus_number: number
    capacity: number
    route_id: number
    driver_id: number
    conductor_id: number
    status: number
    current_location: number
    fuel_level: number
    last_maintenance: number
    insurance_expiry: number
    permit_expiry: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id?: true
    user_id?: true
    capacity?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
    fuel_level?: true
  }

  export type BusSumAggregateInputType = {
    id?: true
    user_id?: true
    capacity?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
    fuel_level?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    user_id?: true
    bus_number?: true
    capacity?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
    status?: true
    current_location?: true
    fuel_level?: true
    last_maintenance?: true
    insurance_expiry?: true
    permit_expiry?: true
    created_at?: true
    updated_at?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    user_id?: true
    bus_number?: true
    capacity?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
    status?: true
    current_location?: true
    fuel_level?: true
    last_maintenance?: true
    insurance_expiry?: true
    permit_expiry?: true
    created_at?: true
    updated_at?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    user_id?: true
    bus_number?: true
    capacity?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
    status?: true
    current_location?: true
    fuel_level?: true
    last_maintenance?: true
    insurance_expiry?: true
    permit_expiry?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: number
    user_id: number
    bus_number: string
    capacity: number
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
    status: $Enums.BusStatus
    current_location: string | null
    fuel_level: Decimal | null
    last_maintenance: Date | null
    insurance_expiry: Date | null
    permit_expiry: Date | null
    created_at: Date
    updated_at: Date
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bus_number?: boolean
    capacity?: boolean
    route_id?: boolean
    driver_id?: boolean
    conductor_id?: boolean
    status?: boolean
    current_location?: boolean
    fuel_level?: boolean
    last_maintenance?: boolean
    insurance_expiry?: boolean
    permit_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | Bus$routeArgs<ExtArgs>
    driver?: boolean | Bus$driverArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    packages?: boolean | Bus$packagesArgs<ExtArgs>
    dailyReports?: boolean | Bus$dailyReportsArgs<ExtArgs>
    posMachines?: boolean | Bus$posMachinesArgs<ExtArgs>
    trips?: boolean | Bus$tripsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>



  export type BusSelectScalar = {
    id?: boolean
    user_id?: boolean
    bus_number?: boolean
    capacity?: boolean
    route_id?: boolean
    driver_id?: boolean
    conductor_id?: boolean
    status?: boolean
    current_location?: boolean
    fuel_level?: boolean
    last_maintenance?: boolean
    insurance_expiry?: boolean
    permit_expiry?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bus_number" | "capacity" | "route_id" | "driver_id" | "conductor_id" | "status" | "current_location" | "fuel_level" | "last_maintenance" | "insurance_expiry" | "permit_expiry" | "created_at" | "updated_at", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | Bus$routeArgs<ExtArgs>
    driver?: boolean | Bus$driverArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    packages?: boolean | Bus$packagesArgs<ExtArgs>
    dailyReports?: boolean | Bus$dailyReportsArgs<ExtArgs>
    posMachines?: boolean | Bus$posMachinesArgs<ExtArgs>
    trips?: boolean | Bus$tripsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs> | null
      driver: Prisma.$UserPayload<ExtArgs> | null
      conductor: Prisma.$UserPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      packages: Prisma.$PackagePayload<ExtArgs>[]
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
      posMachines: Prisma.$POSMachinePayload<ExtArgs>[]
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bus_number: string
      capacity: number
      route_id: number | null
      driver_id: number | null
      conductor_id: number | null
      status: $Enums.BusStatus
      current_location: string | null
      fuel_level: Prisma.Decimal | null
      last_maintenance: Date | null
      insurance_expiry: Date | null
      permit_expiry: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends Bus$routeArgs<ExtArgs> = {}>(args?: Subset<T, Bus$routeArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    driver<T extends Bus$driverArgs<ExtArgs> = {}>(args?: Subset<T, Bus$driverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conductor<T extends Bus$conductorArgs<ExtArgs> = {}>(args?: Subset<T, Bus$conductorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Bus$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Bus$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Bus$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReports<T extends Bus$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posMachines<T extends Bus$posMachinesArgs<ExtArgs> = {}>(args?: Subset<T, Bus$posMachinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips<T extends Bus$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'Int'>
    readonly user_id: FieldRef<"Bus", 'Int'>
    readonly bus_number: FieldRef<"Bus", 'String'>
    readonly capacity: FieldRef<"Bus", 'Int'>
    readonly route_id: FieldRef<"Bus", 'Int'>
    readonly driver_id: FieldRef<"Bus", 'Int'>
    readonly conductor_id: FieldRef<"Bus", 'Int'>
    readonly status: FieldRef<"Bus", 'BusStatus'>
    readonly current_location: FieldRef<"Bus", 'String'>
    readonly fuel_level: FieldRef<"Bus", 'Decimal'>
    readonly last_maintenance: FieldRef<"Bus", 'DateTime'>
    readonly insurance_expiry: FieldRef<"Bus", 'DateTime'>
    readonly permit_expiry: FieldRef<"Bus", 'DateTime'>
    readonly created_at: FieldRef<"Bus", 'DateTime'>
    readonly updated_at: FieldRef<"Bus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.route
   */
  export type Bus$routeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
  }

  /**
   * Bus.driver
   */
  export type Bus$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Bus.conductor
   */
  export type Bus$conductorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Bus.tickets
   */
  export type Bus$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Bus.packages
   */
  export type Bus$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Bus.dailyReports
   */
  export type Bus$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * Bus.posMachines
   */
  export type Bus$posMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    where?: POSMachineWhereInput
    orderBy?: POSMachineOrderByWithRelationInput | POSMachineOrderByWithRelationInput[]
    cursor?: POSMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POSMachineScalarFieldEnum | POSMachineScalarFieldEnum[]
  }

  /**
   * Bus.trips
   */
  export type Bus$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
    weight: Decimal | null
    fare: Decimal | null
    trip_id: number | null
  }

  export type PackageSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    weight: Decimal | null
    fare: Decimal | null
    trip_id: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: number | null
    bus_id: number | null
    package_number: string | null
    sender_name: string | null
    sender_phone: string | null
    receiver_name: string | null
    receiver_phone: string | null
    from_stop: string | null
    to_stop: string | null
    description: string | null
    weight: Decimal | null
    fare: Decimal | null
    status: $Enums.PackageStatus | null
    booked_at: Date | null
    delivered_at: Date | null
    trip_id: number | null
  }

  export type PackageMaxAggregateOutputType = {
    id: number | null
    bus_id: number | null
    package_number: string | null
    sender_name: string | null
    sender_phone: string | null
    receiver_name: string | null
    receiver_phone: string | null
    from_stop: string | null
    to_stop: string | null
    description: string | null
    weight: Decimal | null
    fare: Decimal | null
    status: $Enums.PackageStatus | null
    booked_at: Date | null
    delivered_at: Date | null
    trip_id: number | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    bus_id: number
    package_number: number
    sender_name: number
    sender_phone: number
    receiver_name: number
    receiver_phone: number
    from_stop: number
    to_stop: number
    description: number
    weight: number
    fare: number
    status: number
    booked_at: number
    delivered_at: number
    trip_id: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    id?: true
    bus_id?: true
    weight?: true
    fare?: true
    trip_id?: true
  }

  export type PackageSumAggregateInputType = {
    id?: true
    bus_id?: true
    weight?: true
    fare?: true
    trip_id?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    bus_id?: true
    package_number?: true
    sender_name?: true
    sender_phone?: true
    receiver_name?: true
    receiver_phone?: true
    from_stop?: true
    to_stop?: true
    description?: true
    weight?: true
    fare?: true
    status?: true
    booked_at?: true
    delivered_at?: true
    trip_id?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    bus_id?: true
    package_number?: true
    sender_name?: true
    sender_phone?: true
    receiver_name?: true
    receiver_phone?: true
    from_stop?: true
    to_stop?: true
    description?: true
    weight?: true
    fare?: true
    status?: true
    booked_at?: true
    delivered_at?: true
    trip_id?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    bus_id?: true
    package_number?: true
    sender_name?: true
    sender_phone?: true
    receiver_name?: true
    receiver_phone?: true
    from_stop?: true
    to_stop?: true
    description?: true
    weight?: true
    fare?: true
    status?: true
    booked_at?: true
    delivered_at?: true
    trip_id?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: number
    bus_id: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description: string | null
    weight: Decimal | null
    fare: Decimal
    status: $Enums.PackageStatus
    booked_at: Date
    delivered_at: Date | null
    trip_id: number | null
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bus_id?: boolean
    package_number?: boolean
    sender_name?: boolean
    sender_phone?: boolean
    receiver_name?: boolean
    receiver_phone?: boolean
    from_stop?: boolean
    to_stop?: boolean
    description?: boolean
    weight?: boolean
    fare?: boolean
    status?: boolean
    booked_at?: boolean
    delivered_at?: boolean
    trip_id?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    trip?: boolean | Package$tripArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>



  export type PackageSelectScalar = {
    id?: boolean
    bus_id?: boolean
    package_number?: boolean
    sender_name?: boolean
    sender_phone?: boolean
    receiver_name?: boolean
    receiver_phone?: boolean
    from_stop?: boolean
    to_stop?: boolean
    description?: boolean
    weight?: boolean
    fare?: boolean
    status?: boolean
    booked_at?: boolean
    delivered_at?: boolean
    trip_id?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "package_number" | "sender_name" | "sender_phone" | "receiver_name" | "receiver_phone" | "from_stop" | "to_stop" | "description" | "weight" | "fare" | "status" | "booked_at" | "delivered_at" | "trip_id", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    trip?: boolean | Package$tripArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bus_id: number
      package_number: string
      sender_name: string
      sender_phone: string
      receiver_name: string
      receiver_phone: string
      from_stop: string
      to_stop: string
      description: string | null
      weight: Prisma.Decimal | null
      fare: Prisma.Decimal
      status: $Enums.PackageStatus
      booked_at: Date
      delivered_at: Date | null
      trip_id: number | null
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends Package$tripArgs<ExtArgs> = {}>(args?: Subset<T, Package$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'Int'>
    readonly bus_id: FieldRef<"Package", 'Int'>
    readonly package_number: FieldRef<"Package", 'String'>
    readonly sender_name: FieldRef<"Package", 'String'>
    readonly sender_phone: FieldRef<"Package", 'String'>
    readonly receiver_name: FieldRef<"Package", 'String'>
    readonly receiver_phone: FieldRef<"Package", 'String'>
    readonly from_stop: FieldRef<"Package", 'String'>
    readonly to_stop: FieldRef<"Package", 'String'>
    readonly description: FieldRef<"Package", 'String'>
    readonly weight: FieldRef<"Package", 'Decimal'>
    readonly fare: FieldRef<"Package", 'Decimal'>
    readonly status: FieldRef<"Package", 'PackageStatus'>
    readonly booked_at: FieldRef<"Package", 'DateTime'>
    readonly delivered_at: FieldRef<"Package", 'DateTime'>
    readonly trip_id: FieldRef<"Package", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.trip
   */
  export type Package$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model POSMachine
   */

  export type AggregatePOSMachine = {
    _count: POSMachineCountAggregateOutputType | null
    _avg: POSMachineAvgAggregateOutputType | null
    _sum: POSMachineSumAggregateOutputType | null
    _min: POSMachineMinAggregateOutputType | null
    _max: POSMachineMaxAggregateOutputType | null
  }

  export type POSMachineAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
  }

  export type POSMachineSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
  }

  export type POSMachineMinAggregateOutputType = {
    id: number | null
    serial_no: string | null
    assigned: boolean | null
    assigned_at: Date | null
    status: $Enums.POSStatus | null
    bus_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type POSMachineMaxAggregateOutputType = {
    id: number | null
    serial_no: string | null
    assigned: boolean | null
    assigned_at: Date | null
    status: $Enums.POSStatus | null
    bus_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type POSMachineCountAggregateOutputType = {
    id: number
    serial_no: number
    assigned: number
    assigned_at: number
    status: number
    bus_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type POSMachineAvgAggregateInputType = {
    id?: true
    bus_id?: true
  }

  export type POSMachineSumAggregateInputType = {
    id?: true
    bus_id?: true
  }

  export type POSMachineMinAggregateInputType = {
    id?: true
    serial_no?: true
    assigned?: true
    assigned_at?: true
    status?: true
    bus_id?: true
    created_at?: true
    updated_at?: true
  }

  export type POSMachineMaxAggregateInputType = {
    id?: true
    serial_no?: true
    assigned?: true
    assigned_at?: true
    status?: true
    bus_id?: true
    created_at?: true
    updated_at?: true
  }

  export type POSMachineCountAggregateInputType = {
    id?: true
    serial_no?: true
    assigned?: true
    assigned_at?: true
    status?: true
    bus_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type POSMachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POSMachine to aggregate.
     */
    where?: POSMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSMachines to fetch.
     */
    orderBy?: POSMachineOrderByWithRelationInput | POSMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POSMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POSMachines
    **/
    _count?: true | POSMachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: POSMachineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: POSMachineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POSMachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POSMachineMaxAggregateInputType
  }

  export type GetPOSMachineAggregateType<T extends POSMachineAggregateArgs> = {
        [P in keyof T & keyof AggregatePOSMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOSMachine[P]>
      : GetScalarType<T[P], AggregatePOSMachine[P]>
  }




  export type POSMachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSMachineWhereInput
    orderBy?: POSMachineOrderByWithAggregationInput | POSMachineOrderByWithAggregationInput[]
    by: POSMachineScalarFieldEnum[] | POSMachineScalarFieldEnum
    having?: POSMachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POSMachineCountAggregateInputType | true
    _avg?: POSMachineAvgAggregateInputType
    _sum?: POSMachineSumAggregateInputType
    _min?: POSMachineMinAggregateInputType
    _max?: POSMachineMaxAggregateInputType
  }

  export type POSMachineGroupByOutputType = {
    id: number
    serial_no: string
    assigned: boolean
    assigned_at: Date | null
    status: $Enums.POSStatus
    bus_id: number | null
    created_at: Date
    updated_at: Date
    _count: POSMachineCountAggregateOutputType | null
    _avg: POSMachineAvgAggregateOutputType | null
    _sum: POSMachineSumAggregateOutputType | null
    _min: POSMachineMinAggregateOutputType | null
    _max: POSMachineMaxAggregateOutputType | null
  }

  type GetPOSMachineGroupByPayload<T extends POSMachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POSMachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POSMachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POSMachineGroupByOutputType[P]>
            : GetScalarType<T[P], POSMachineGroupByOutputType[P]>
        }
      >
    >


  export type POSMachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial_no?: boolean
    assigned?: boolean
    assigned_at?: boolean
    status?: boolean
    bus_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bus?: boolean | POSMachine$busArgs<ExtArgs>
    tickets?: boolean | POSMachine$ticketsArgs<ExtArgs>
    _count?: boolean | POSMachineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOSMachine"]>



  export type POSMachineSelectScalar = {
    id?: boolean
    serial_no?: boolean
    assigned?: boolean
    assigned_at?: boolean
    status?: boolean
    bus_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type POSMachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serial_no" | "assigned" | "assigned_at" | "status" | "bus_id" | "created_at" | "updated_at", ExtArgs["result"]["pOSMachine"]>
  export type POSMachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | POSMachine$busArgs<ExtArgs>
    tickets?: boolean | POSMachine$ticketsArgs<ExtArgs>
    _count?: boolean | POSMachineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $POSMachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POSMachine"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serial_no: string
      assigned: boolean
      assigned_at: Date | null
      status: $Enums.POSStatus
      bus_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pOSMachine"]>
    composites: {}
  }

  type POSMachineGetPayload<S extends boolean | null | undefined | POSMachineDefaultArgs> = $Result.GetResult<Prisma.$POSMachinePayload, S>

  type POSMachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POSMachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POSMachineCountAggregateInputType | true
    }

  export interface POSMachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POSMachine'], meta: { name: 'POSMachine' } }
    /**
     * Find zero or one POSMachine that matches the filter.
     * @param {POSMachineFindUniqueArgs} args - Arguments to find a POSMachine
     * @example
     * // Get one POSMachine
     * const pOSMachine = await prisma.pOSMachine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POSMachineFindUniqueArgs>(args: SelectSubset<T, POSMachineFindUniqueArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POSMachine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POSMachineFindUniqueOrThrowArgs} args - Arguments to find a POSMachine
     * @example
     * // Get one POSMachine
     * const pOSMachine = await prisma.pOSMachine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POSMachineFindUniqueOrThrowArgs>(args: SelectSubset<T, POSMachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POSMachine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineFindFirstArgs} args - Arguments to find a POSMachine
     * @example
     * // Get one POSMachine
     * const pOSMachine = await prisma.pOSMachine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POSMachineFindFirstArgs>(args?: SelectSubset<T, POSMachineFindFirstArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POSMachine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineFindFirstOrThrowArgs} args - Arguments to find a POSMachine
     * @example
     * // Get one POSMachine
     * const pOSMachine = await prisma.pOSMachine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POSMachineFindFirstOrThrowArgs>(args?: SelectSubset<T, POSMachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POSMachines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POSMachines
     * const pOSMachines = await prisma.pOSMachine.findMany()
     * 
     * // Get first 10 POSMachines
     * const pOSMachines = await prisma.pOSMachine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOSMachineWithIdOnly = await prisma.pOSMachine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POSMachineFindManyArgs>(args?: SelectSubset<T, POSMachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POSMachine.
     * @param {POSMachineCreateArgs} args - Arguments to create a POSMachine.
     * @example
     * // Create one POSMachine
     * const POSMachine = await prisma.pOSMachine.create({
     *   data: {
     *     // ... data to create a POSMachine
     *   }
     * })
     * 
     */
    create<T extends POSMachineCreateArgs>(args: SelectSubset<T, POSMachineCreateArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POSMachines.
     * @param {POSMachineCreateManyArgs} args - Arguments to create many POSMachines.
     * @example
     * // Create many POSMachines
     * const pOSMachine = await prisma.pOSMachine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POSMachineCreateManyArgs>(args?: SelectSubset<T, POSMachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a POSMachine.
     * @param {POSMachineDeleteArgs} args - Arguments to delete one POSMachine.
     * @example
     * // Delete one POSMachine
     * const POSMachine = await prisma.pOSMachine.delete({
     *   where: {
     *     // ... filter to delete one POSMachine
     *   }
     * })
     * 
     */
    delete<T extends POSMachineDeleteArgs>(args: SelectSubset<T, POSMachineDeleteArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POSMachine.
     * @param {POSMachineUpdateArgs} args - Arguments to update one POSMachine.
     * @example
     * // Update one POSMachine
     * const pOSMachine = await prisma.pOSMachine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POSMachineUpdateArgs>(args: SelectSubset<T, POSMachineUpdateArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POSMachines.
     * @param {POSMachineDeleteManyArgs} args - Arguments to filter POSMachines to delete.
     * @example
     * // Delete a few POSMachines
     * const { count } = await prisma.pOSMachine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POSMachineDeleteManyArgs>(args?: SelectSubset<T, POSMachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POSMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POSMachines
     * const pOSMachine = await prisma.pOSMachine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POSMachineUpdateManyArgs>(args: SelectSubset<T, POSMachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one POSMachine.
     * @param {POSMachineUpsertArgs} args - Arguments to update or create a POSMachine.
     * @example
     * // Update or create a POSMachine
     * const pOSMachine = await prisma.pOSMachine.upsert({
     *   create: {
     *     // ... data to create a POSMachine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POSMachine we want to update
     *   }
     * })
     */
    upsert<T extends POSMachineUpsertArgs>(args: SelectSubset<T, POSMachineUpsertArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POSMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineCountArgs} args - Arguments to filter POSMachines to count.
     * @example
     * // Count the number of POSMachines
     * const count = await prisma.pOSMachine.count({
     *   where: {
     *     // ... the filter for the POSMachines we want to count
     *   }
     * })
    **/
    count<T extends POSMachineCountArgs>(
      args?: Subset<T, POSMachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POSMachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POSMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends POSMachineAggregateArgs>(args: Subset<T, POSMachineAggregateArgs>): Prisma.PrismaPromise<GetPOSMachineAggregateType<T>>

    /**
     * Group by POSMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSMachineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends POSMachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POSMachineGroupByArgs['orderBy'] }
        : { orderBy?: POSMachineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, POSMachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOSMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POSMachine model
   */
  readonly fields: POSMachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POSMachine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POSMachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends POSMachine$busArgs<ExtArgs> = {}>(args?: Subset<T, POSMachine$busArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends POSMachine$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, POSMachine$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the POSMachine model
   */
  interface POSMachineFieldRefs {
    readonly id: FieldRef<"POSMachine", 'Int'>
    readonly serial_no: FieldRef<"POSMachine", 'String'>
    readonly assigned: FieldRef<"POSMachine", 'Boolean'>
    readonly assigned_at: FieldRef<"POSMachine", 'DateTime'>
    readonly status: FieldRef<"POSMachine", 'POSStatus'>
    readonly bus_id: FieldRef<"POSMachine", 'Int'>
    readonly created_at: FieldRef<"POSMachine", 'DateTime'>
    readonly updated_at: FieldRef<"POSMachine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * POSMachine findUnique
   */
  export type POSMachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter, which POSMachine to fetch.
     */
    where: POSMachineWhereUniqueInput
  }

  /**
   * POSMachine findUniqueOrThrow
   */
  export type POSMachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter, which POSMachine to fetch.
     */
    where: POSMachineWhereUniqueInput
  }

  /**
   * POSMachine findFirst
   */
  export type POSMachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter, which POSMachine to fetch.
     */
    where?: POSMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSMachines to fetch.
     */
    orderBy?: POSMachineOrderByWithRelationInput | POSMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSMachines.
     */
    cursor?: POSMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSMachines.
     */
    distinct?: POSMachineScalarFieldEnum | POSMachineScalarFieldEnum[]
  }

  /**
   * POSMachine findFirstOrThrow
   */
  export type POSMachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter, which POSMachine to fetch.
     */
    where?: POSMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSMachines to fetch.
     */
    orderBy?: POSMachineOrderByWithRelationInput | POSMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSMachines.
     */
    cursor?: POSMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSMachines.
     */
    distinct?: POSMachineScalarFieldEnum | POSMachineScalarFieldEnum[]
  }

  /**
   * POSMachine findMany
   */
  export type POSMachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter, which POSMachines to fetch.
     */
    where?: POSMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSMachines to fetch.
     */
    orderBy?: POSMachineOrderByWithRelationInput | POSMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POSMachines.
     */
    cursor?: POSMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSMachines.
     */
    skip?: number
    distinct?: POSMachineScalarFieldEnum | POSMachineScalarFieldEnum[]
  }

  /**
   * POSMachine create
   */
  export type POSMachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * The data needed to create a POSMachine.
     */
    data: XOR<POSMachineCreateInput, POSMachineUncheckedCreateInput>
  }

  /**
   * POSMachine createMany
   */
  export type POSMachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POSMachines.
     */
    data: POSMachineCreateManyInput | POSMachineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POSMachine update
   */
  export type POSMachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * The data needed to update a POSMachine.
     */
    data: XOR<POSMachineUpdateInput, POSMachineUncheckedUpdateInput>
    /**
     * Choose, which POSMachine to update.
     */
    where: POSMachineWhereUniqueInput
  }

  /**
   * POSMachine updateMany
   */
  export type POSMachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POSMachines.
     */
    data: XOR<POSMachineUpdateManyMutationInput, POSMachineUncheckedUpdateManyInput>
    /**
     * Filter which POSMachines to update
     */
    where?: POSMachineWhereInput
    /**
     * Limit how many POSMachines to update.
     */
    limit?: number
  }

  /**
   * POSMachine upsert
   */
  export type POSMachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * The filter to search for the POSMachine to update in case it exists.
     */
    where: POSMachineWhereUniqueInput
    /**
     * In case the POSMachine found by the `where` argument doesn't exist, create a new POSMachine with this data.
     */
    create: XOR<POSMachineCreateInput, POSMachineUncheckedCreateInput>
    /**
     * In case the POSMachine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POSMachineUpdateInput, POSMachineUncheckedUpdateInput>
  }

  /**
   * POSMachine delete
   */
  export type POSMachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    /**
     * Filter which POSMachine to delete.
     */
    where: POSMachineWhereUniqueInput
  }

  /**
   * POSMachine deleteMany
   */
  export type POSMachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POSMachines to delete
     */
    where?: POSMachineWhereInput
    /**
     * Limit how many POSMachines to delete.
     */
    limit?: number
  }

  /**
   * POSMachine.bus
   */
  export type POSMachine$busArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
  }

  /**
   * POSMachine.tickets
   */
  export type POSMachine$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * POSMachine without action
   */
  export type POSMachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
    total_passengers: number | null
    total_revenue: Decimal | null
    total_packages: number | null
    package_revenue: Decimal | null
    fuel_cost: Decimal | null
    maintenance_cost: Decimal | null
  }

  export type DailyReportSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    total_passengers: number | null
    total_revenue: Decimal | null
    total_packages: number | null
    package_revenue: Decimal | null
    fuel_cost: Decimal | null
    maintenance_cost: Decimal | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: number | null
    bus_id: number | null
    report_date: Date | null
    total_passengers: number | null
    total_revenue: Decimal | null
    total_packages: number | null
    package_revenue: Decimal | null
    fuel_cost: Decimal | null
    maintenance_cost: Decimal | null
    created_at: Date | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: number | null
    bus_id: number | null
    report_date: Date | null
    total_passengers: number | null
    total_revenue: Decimal | null
    total_packages: number | null
    package_revenue: Decimal | null
    fuel_cost: Decimal | null
    maintenance_cost: Decimal | null
    created_at: Date | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    bus_id: number
    report_date: number
    total_passengers: number
    total_revenue: number
    total_packages: number
    package_revenue: number
    fuel_cost: number
    maintenance_cost: number
    created_at: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    id?: true
    bus_id?: true
    total_passengers?: true
    total_revenue?: true
    total_packages?: true
    package_revenue?: true
    fuel_cost?: true
    maintenance_cost?: true
  }

  export type DailyReportSumAggregateInputType = {
    id?: true
    bus_id?: true
    total_passengers?: true
    total_revenue?: true
    total_packages?: true
    package_revenue?: true
    fuel_cost?: true
    maintenance_cost?: true
  }

  export type DailyReportMinAggregateInputType = {
    id?: true
    bus_id?: true
    report_date?: true
    total_passengers?: true
    total_revenue?: true
    total_packages?: true
    package_revenue?: true
    fuel_cost?: true
    maintenance_cost?: true
    created_at?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    bus_id?: true
    report_date?: true
    total_passengers?: true
    total_revenue?: true
    total_packages?: true
    package_revenue?: true
    fuel_cost?: true
    maintenance_cost?: true
    created_at?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    bus_id?: true
    report_date?: true
    total_passengers?: true
    total_revenue?: true
    total_packages?: true
    package_revenue?: true
    fuel_cost?: true
    maintenance_cost?: true
    created_at?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: number
    bus_id: number
    report_date: Date
    total_passengers: number
    total_revenue: Decimal
    total_packages: number
    package_revenue: Decimal
    fuel_cost: Decimal
    maintenance_cost: Decimal
    created_at: Date
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bus_id?: boolean
    report_date?: boolean
    total_passengers?: boolean
    total_revenue?: boolean
    total_packages?: boolean
    package_revenue?: boolean
    fuel_cost?: boolean
    maintenance_cost?: boolean
    created_at?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>



  export type DailyReportSelectScalar = {
    id?: boolean
    bus_id?: boolean
    report_date?: boolean
    total_passengers?: boolean
    total_revenue?: boolean
    total_packages?: boolean
    package_revenue?: boolean
    fuel_cost?: boolean
    maintenance_cost?: boolean
    created_at?: boolean
  }

  export type DailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "report_date" | "total_passengers" | "total_revenue" | "total_packages" | "package_revenue" | "fuel_cost" | "maintenance_cost" | "created_at", ExtArgs["result"]["dailyReport"]>
  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bus_id: number
      report_date: Date
      total_passengers: number
      total_revenue: Prisma.Decimal
      total_packages: number
      package_revenue: Prisma.Decimal
      fuel_cost: Prisma.Decimal
      maintenance_cost: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReport model
   */
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'Int'>
    readonly bus_id: FieldRef<"DailyReport", 'Int'>
    readonly report_date: FieldRef<"DailyReport", 'DateTime'>
    readonly total_passengers: FieldRef<"DailyReport", 'Int'>
    readonly total_revenue: FieldRef<"DailyReport", 'Decimal'>
    readonly total_packages: FieldRef<"DailyReport", 'Int'>
    readonly package_revenue: FieldRef<"DailyReport", 'Decimal'>
    readonly fuel_cost: FieldRef<"DailyReport", 'Decimal'>
    readonly maintenance_cost: FieldRef<"DailyReport", 'Decimal'>
    readonly created_at: FieldRef<"DailyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to delete.
     */
    limit?: number
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    distance: Decimal | null
    base_fare: Decimal | null
    per_km_rate: Decimal | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    distance: Decimal | null
    base_fare: Decimal | null
    per_km_rate: Decimal | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    code: string | null
    distance: Decimal | null
    base_fare: Decimal | null
    per_km_rate: Decimal | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    code: string | null
    distance: Decimal | null
    base_fare: Decimal | null
    per_km_rate: Decimal | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    code: number
    distance: number
    base_fare: number
    per_km_rate: number
    stops: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    user_id?: true
    distance?: true
    base_fare?: true
    per_km_rate?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    user_id?: true
    distance?: true
    base_fare?: true
    per_km_rate?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    code?: true
    distance?: true
    base_fare?: true
    per_km_rate?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    code?: true
    distance?: true
    base_fare?: true
    per_km_rate?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    code?: true
    distance?: true
    base_fare?: true
    per_km_rate?: true
    stops?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    user_id: number
    name: string
    code: string
    distance: Decimal
    base_fare: Decimal
    per_km_rate: Decimal
    stops: JsonValue
    active: boolean
    created_at: Date
    updated_at: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    code?: boolean
    distance?: boolean
    base_fare?: boolean
    per_km_rate?: boolean
    stops?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Route$busesArgs<ExtArgs>
    trips?: boolean | Route$tripsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>



  export type RouteSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    code?: boolean
    distance?: boolean
    base_fare?: boolean
    per_km_rate?: boolean
    stops?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "code" | "distance" | "base_fare" | "per_km_rate" | "stops" | "active" | "created_at" | "updated_at", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Route$busesArgs<ExtArgs>
    trips?: boolean | Route$tripsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buses: Prisma.$BusPayload<ExtArgs>[]
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      code: string
      distance: Prisma.Decimal
      base_fare: Prisma.Decimal
      per_km_rate: Prisma.Decimal
      stops: Prisma.JsonValue
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buses<T extends Route$busesArgs<ExtArgs> = {}>(args?: Subset<T, Route$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips<T extends Route$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Route$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly user_id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly code: FieldRef<"Route", 'String'>
    readonly distance: FieldRef<"Route", 'Decimal'>
    readonly base_fare: FieldRef<"Route", 'Decimal'>
    readonly per_km_rate: FieldRef<"Route", 'Decimal'>
    readonly stops: FieldRef<"Route", 'Json'>
    readonly active: FieldRef<"Route", 'Boolean'>
    readonly created_at: FieldRef<"Route", 'DateTime'>
    readonly updated_at: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.buses
   */
  export type Route$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Route.trips
   */
  export type Route$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
    fare: Decimal | null
    seat_no: number | null
    pos_machine_id: number | null
    trip_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    fare: Decimal | null
    seat_no: number | null
    pos_machine_id: number | null
    trip_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    bus_id: number | null
    ticket_number: string | null
    passenger_name: string | null
    passenger_phone: string | null
    from_stop: string | null
    to_stop: string | null
    passenger_type: $Enums.PassengerType | null
    fare: Decimal | null
    issue_time: Date | null
    journey_date: Date | null
    status: $Enums.TicketStatus | null
    seat_no: number | null
    pos_machine_id: number | null
    payment_mode: $Enums.PaymentMode | null
    trip_id: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    bus_id: number | null
    ticket_number: string | null
    passenger_name: string | null
    passenger_phone: string | null
    from_stop: string | null
    to_stop: string | null
    passenger_type: $Enums.PassengerType | null
    fare: Decimal | null
    issue_time: Date | null
    journey_date: Date | null
    status: $Enums.TicketStatus | null
    seat_no: number | null
    pos_machine_id: number | null
    payment_mode: $Enums.PaymentMode | null
    trip_id: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    bus_id: number
    ticket_number: number
    passenger_name: number
    passenger_phone: number
    from_stop: number
    to_stop: number
    passenger_type: number
    fare: number
    issue_time: number
    journey_date: number
    status: number
    seat_no: number
    pos_machine_id: number
    payment_mode: number
    trip_id: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    bus_id?: true
    fare?: true
    seat_no?: true
    pos_machine_id?: true
    trip_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    bus_id?: true
    fare?: true
    seat_no?: true
    pos_machine_id?: true
    trip_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    bus_id?: true
    ticket_number?: true
    passenger_name?: true
    passenger_phone?: true
    from_stop?: true
    to_stop?: true
    passenger_type?: true
    fare?: true
    issue_time?: true
    journey_date?: true
    status?: true
    seat_no?: true
    pos_machine_id?: true
    payment_mode?: true
    trip_id?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    bus_id?: true
    ticket_number?: true
    passenger_name?: true
    passenger_phone?: true
    from_stop?: true
    to_stop?: true
    passenger_type?: true
    fare?: true
    issue_time?: true
    journey_date?: true
    status?: true
    seat_no?: true
    pos_machine_id?: true
    payment_mode?: true
    trip_id?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    bus_id?: true
    ticket_number?: true
    passenger_name?: true
    passenger_phone?: true
    from_stop?: true
    to_stop?: true
    passenger_type?: true
    fare?: true
    issue_time?: true
    journey_date?: true
    status?: true
    seat_no?: true
    pos_machine_id?: true
    payment_mode?: true
    trip_id?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    bus_id: number
    ticket_number: string
    passenger_name: string | null
    passenger_phone: string | null
    from_stop: string
    to_stop: string
    passenger_type: $Enums.PassengerType
    fare: Decimal
    issue_time: Date
    journey_date: Date
    status: $Enums.TicketStatus
    seat_no: number | null
    pos_machine_id: number | null
    payment_mode: $Enums.PaymentMode
    trip_id: number | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bus_id?: boolean
    ticket_number?: boolean
    passenger_name?: boolean
    passenger_phone?: boolean
    from_stop?: boolean
    to_stop?: boolean
    passenger_type?: boolean
    fare?: boolean
    issue_time?: boolean
    journey_date?: boolean
    status?: boolean
    seat_no?: boolean
    pos_machine_id?: boolean
    payment_mode?: boolean
    trip_id?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    posMachine?: boolean | Ticket$posMachineArgs<ExtArgs>
    trip?: boolean | Ticket$tripArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    bus_id?: boolean
    ticket_number?: boolean
    passenger_name?: boolean
    passenger_phone?: boolean
    from_stop?: boolean
    to_stop?: boolean
    passenger_type?: boolean
    fare?: boolean
    issue_time?: boolean
    journey_date?: boolean
    status?: boolean
    seat_no?: boolean
    pos_machine_id?: boolean
    payment_mode?: boolean
    trip_id?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "ticket_number" | "passenger_name" | "passenger_phone" | "from_stop" | "to_stop" | "passenger_type" | "fare" | "issue_time" | "journey_date" | "status" | "seat_no" | "pos_machine_id" | "payment_mode" | "trip_id", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    posMachine?: boolean | Ticket$posMachineArgs<ExtArgs>
    trip?: boolean | Ticket$tripArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      posMachine: Prisma.$POSMachinePayload<ExtArgs> | null
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bus_id: number
      ticket_number: string
      passenger_name: string | null
      passenger_phone: string | null
      from_stop: string
      to_stop: string
      passenger_type: $Enums.PassengerType
      fare: Prisma.Decimal
      issue_time: Date
      journey_date: Date
      status: $Enums.TicketStatus
      seat_no: number | null
      pos_machine_id: number | null
      payment_mode: $Enums.PaymentMode
      trip_id: number | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posMachine<T extends Ticket$posMachineArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$posMachineArgs<ExtArgs>>): Prisma__POSMachineClient<$Result.GetResult<Prisma.$POSMachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trip<T extends Ticket$tripArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly bus_id: FieldRef<"Ticket", 'Int'>
    readonly ticket_number: FieldRef<"Ticket", 'String'>
    readonly passenger_name: FieldRef<"Ticket", 'String'>
    readonly passenger_phone: FieldRef<"Ticket", 'String'>
    readonly from_stop: FieldRef<"Ticket", 'String'>
    readonly to_stop: FieldRef<"Ticket", 'String'>
    readonly passenger_type: FieldRef<"Ticket", 'PassengerType'>
    readonly fare: FieldRef<"Ticket", 'Decimal'>
    readonly issue_time: FieldRef<"Ticket", 'DateTime'>
    readonly journey_date: FieldRef<"Ticket", 'DateTime'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly seat_no: FieldRef<"Ticket", 'Int'>
    readonly pos_machine_id: FieldRef<"Ticket", 'Int'>
    readonly payment_mode: FieldRef<"Ticket", 'PaymentMode'>
    readonly trip_id: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.posMachine
   */
  export type Ticket$posMachineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSMachine
     */
    select?: POSMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSMachine
     */
    omit?: POSMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSMachineInclude<ExtArgs> | null
    where?: POSMachineWhereInput
  }

  /**
   * Ticket.trip
   */
  export type Ticket$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    route_id: number | null
    driver_id: number | null
    conductor_id: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    bus_id: number | null
    route_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: $Enums.TripStatus | null
    driver_id: number | null
    conductor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    bus_id: number | null
    route_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: $Enums.TripStatus | null
    driver_id: number | null
    conductor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    bus_id: number
    route_id: number
    start_time: number
    end_time: number
    status: number
    driver_id: number
    conductor_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    bus_id?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    bus_id?: true
    route_id?: true
    driver_id?: true
    conductor_id?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    bus_id?: true
    route_id?: true
    start_time?: true
    end_time?: true
    status?: true
    driver_id?: true
    conductor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    bus_id?: true
    route_id?: true
    start_time?: true
    end_time?: true
    status?: true
    driver_id?: true
    conductor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    bus_id?: true
    route_id?: true
    start_time?: true
    end_time?: true
    status?: true
    driver_id?: true
    conductor_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    bus_id: number
    route_id: number
    start_time: Date
    end_time: Date | null
    status: $Enums.TripStatus
    driver_id: number | null
    conductor_id: number | null
    created_at: Date
    updated_at: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bus_id?: boolean
    route_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    driver_id?: boolean
    conductor_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | Trip$driverArgs<ExtArgs>
    conductor?: boolean | Trip$conductorArgs<ExtArgs>
    tickets?: boolean | Trip$ticketsArgs<ExtArgs>
    packages?: boolean | Trip$packagesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type TripSelectScalar = {
    id?: boolean
    bus_id?: boolean
    route_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    driver_id?: boolean
    conductor_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "route_id" | "start_time" | "end_time" | "status" | "driver_id" | "conductor_id" | "created_at" | "updated_at", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | Trip$driverArgs<ExtArgs>
    conductor?: boolean | Trip$conductorArgs<ExtArgs>
    tickets?: boolean | Trip$ticketsArgs<ExtArgs>
    packages?: boolean | Trip$packagesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
      driver: Prisma.$UserPayload<ExtArgs> | null
      conductor: Prisma.$UserPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      packages: Prisma.$PackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bus_id: number
      route_id: number
      start_time: Date
      end_time: Date | null
      status: $Enums.TripStatus
      driver_id: number | null
      conductor_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Trip$driverArgs<ExtArgs> = {}>(args?: Subset<T, Trip$driverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conductor<T extends Trip$conductorArgs<ExtArgs> = {}>(args?: Subset<T, Trip$conductorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Trip$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Trip$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly bus_id: FieldRef<"Trip", 'Int'>
    readonly route_id: FieldRef<"Trip", 'Int'>
    readonly start_time: FieldRef<"Trip", 'DateTime'>
    readonly end_time: FieldRef<"Trip", 'DateTime'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly driver_id: FieldRef<"Trip", 'Int'>
    readonly conductor_id: FieldRef<"Trip", 'Int'>
    readonly created_at: FieldRef<"Trip", 'DateTime'>
    readonly updated_at: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.driver
   */
  export type Trip$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Trip.conductor
   */
  export type Trip$conductorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Trip.tickets
   */
  export type Trip$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Trip.packages
   */
  export type Trip$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    company_name: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    company_name: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    company_name: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    company_name?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    company_name?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    company_name?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string | null
    password: string | null
    phone: string
    role: $Enums.Role
    company_name: string | null
    is_verified: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    company_name?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    userExtra?: boolean | User$userExtraArgs<ExtArgs>
    busesDriven?: boolean | User$busesDrivenArgs<ExtArgs>
    busesConducted?: boolean | User$busesConductedArgs<ExtArgs>
    tripsDriven?: boolean | User$tripsDrivenArgs<ExtArgs>
    tripsConducted?: boolean | User$tripsConductedArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    buses?: boolean | User$busesArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    company_name?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "company_name" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExtra?: boolean | User$userExtraArgs<ExtArgs>
    busesDriven?: boolean | User$busesDrivenArgs<ExtArgs>
    busesConducted?: boolean | User$busesConductedArgs<ExtArgs>
    tripsDriven?: boolean | User$tripsDrivenArgs<ExtArgs>
    tripsConducted?: boolean | User$tripsConductedArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    buses?: boolean | User$busesArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userExtra: Prisma.$UserExtraPayload<ExtArgs> | null
      busesDriven: Prisma.$BusPayload<ExtArgs>[]
      busesConducted: Prisma.$BusPayload<ExtArgs>[]
      tripsDriven: Prisma.$TripPayload<ExtArgs>[]
      tripsConducted: Prisma.$TripPayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
      buses: Prisma.$BusPayload<ExtArgs>[]
      otps: Prisma.$OTPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      password: string | null
      phone: string
      role: $Enums.Role
      company_name: string | null
      is_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExtra<T extends User$userExtraArgs<ExtArgs> = {}>(args?: Subset<T, User$userExtraArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    busesDriven<T extends User$busesDrivenArgs<ExtArgs> = {}>(args?: Subset<T, User$busesDrivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    busesConducted<T extends User$busesConductedArgs<ExtArgs> = {}>(args?: Subset<T, User$busesConductedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripsDriven<T extends User$tripsDrivenArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsDrivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripsConducted<T extends User$tripsConductedArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsConductedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends User$routesArgs<ExtArgs> = {}>(args?: Subset<T, User$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buses<T extends User$busesArgs<ExtArgs> = {}>(args?: Subset<T, User$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly company_name: FieldRef<"User", 'String'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userExtra
   */
  export type User$userExtraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    where?: UserExtraWhereInput
  }

  /**
   * User.busesDriven
   */
  export type User$busesDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * User.busesConducted
   */
  export type User$busesConductedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * User.tripsDriven
   */
  export type User$tripsDrivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.tripsConducted
   */
  export type User$tripsConductedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.routes
   */
  export type User$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User.buses
   */
  export type User$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    cursor?: OTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserExtra
   */

  export type AggregateUserExtra = {
    _count: UserExtraCountAggregateOutputType | null
    _avg: UserExtraAvgAggregateOutputType | null
    _sum: UserExtraSumAggregateOutputType | null
    _min: UserExtraMinAggregateOutputType | null
    _max: UserExtraMaxAggregateOutputType | null
  }

  export type UserExtraAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    experience_years: number | null
  }

  export type UserExtraSumAggregateOutputType = {
    id: number | null
    userId: number | null
    experience_years: number | null
  }

  export type UserExtraMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    license_number: string | null
    license_expiry: Date | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserExtraMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    license_number: string | null
    license_expiry: Date | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserExtraCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    license_number: number
    license_expiry: number
    experience_years: number
    address: number
    emergency_contact: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserExtraAvgAggregateInputType = {
    id?: true
    userId?: true
    experience_years?: true
  }

  export type UserExtraSumAggregateInputType = {
    id?: true
    userId?: true
    experience_years?: true
  }

  export type UserExtraMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    license_number?: true
    license_expiry?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserExtraMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    license_number?: true
    license_expiry?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserExtraCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    license_number?: true
    license_expiry?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserExtraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExtra to aggregate.
     */
    where?: UserExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExtras to fetch.
     */
    orderBy?: UserExtraOrderByWithRelationInput | UserExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExtras
    **/
    _count?: true | UserExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExtraMaxAggregateInputType
  }

  export type GetUserExtraAggregateType<T extends UserExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExtra[P]>
      : GetScalarType<T[P], AggregateUserExtra[P]>
  }




  export type UserExtraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExtraWhereInput
    orderBy?: UserExtraOrderByWithAggregationInput | UserExtraOrderByWithAggregationInput[]
    by: UserExtraScalarFieldEnum[] | UserExtraScalarFieldEnum
    having?: UserExtraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExtraCountAggregateInputType | true
    _avg?: UserExtraAvgAggregateInputType
    _sum?: UserExtraSumAggregateInputType
    _min?: UserExtraMinAggregateInputType
    _max?: UserExtraMaxAggregateInputType
  }

  export type UserExtraGroupByOutputType = {
    id: number
    userId: number
    name: string | null
    license_number: string | null
    license_expiry: Date | null
    experience_years: number
    address: string | null
    emergency_contact: string | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: UserExtraCountAggregateOutputType | null
    _avg: UserExtraAvgAggregateOutputType | null
    _sum: UserExtraSumAggregateOutputType | null
    _min: UserExtraMinAggregateOutputType | null
    _max: UserExtraMaxAggregateOutputType | null
  }

  type GetUserExtraGroupByPayload<T extends UserExtraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExtraGroupByOutputType[P]>
            : GetScalarType<T[P], UserExtraGroupByOutputType[P]>
        }
      >
    >


  export type UserExtraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    license_number?: boolean
    license_expiry?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExtra"]>



  export type UserExtraSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    license_number?: boolean
    license_expiry?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserExtraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "license_number" | "license_expiry" | "experience_years" | "address" | "emergency_contact" | "active" | "created_at" | "updated_at", ExtArgs["result"]["userExtra"]>
  export type UserExtraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserExtraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExtra"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string | null
      license_number: string | null
      license_expiry: Date | null
      experience_years: number
      address: string | null
      emergency_contact: string | null
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userExtra"]>
    composites: {}
  }

  type UserExtraGetPayload<S extends boolean | null | undefined | UserExtraDefaultArgs> = $Result.GetResult<Prisma.$UserExtraPayload, S>

  type UserExtraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserExtraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserExtraCountAggregateInputType | true
    }

  export interface UserExtraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExtra'], meta: { name: 'UserExtra' } }
    /**
     * Find zero or one UserExtra that matches the filter.
     * @param {UserExtraFindUniqueArgs} args - Arguments to find a UserExtra
     * @example
     * // Get one UserExtra
     * const userExtra = await prisma.userExtra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExtraFindUniqueArgs>(args: SelectSubset<T, UserExtraFindUniqueArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserExtra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserExtraFindUniqueOrThrowArgs} args - Arguments to find a UserExtra
     * @example
     * // Get one UserExtra
     * const userExtra = await prisma.userExtra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExtraFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExtraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExtra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraFindFirstArgs} args - Arguments to find a UserExtra
     * @example
     * // Get one UserExtra
     * const userExtra = await prisma.userExtra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExtraFindFirstArgs>(args?: SelectSubset<T, UserExtraFindFirstArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExtra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraFindFirstOrThrowArgs} args - Arguments to find a UserExtra
     * @example
     * // Get one UserExtra
     * const userExtra = await prisma.userExtra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExtraFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExtraFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExtras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExtras
     * const userExtras = await prisma.userExtra.findMany()
     * 
     * // Get first 10 UserExtras
     * const userExtras = await prisma.userExtra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExtraWithIdOnly = await prisma.userExtra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExtraFindManyArgs>(args?: SelectSubset<T, UserExtraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserExtra.
     * @param {UserExtraCreateArgs} args - Arguments to create a UserExtra.
     * @example
     * // Create one UserExtra
     * const UserExtra = await prisma.userExtra.create({
     *   data: {
     *     // ... data to create a UserExtra
     *   }
     * })
     * 
     */
    create<T extends UserExtraCreateArgs>(args: SelectSubset<T, UserExtraCreateArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserExtras.
     * @param {UserExtraCreateManyArgs} args - Arguments to create many UserExtras.
     * @example
     * // Create many UserExtras
     * const userExtra = await prisma.userExtra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExtraCreateManyArgs>(args?: SelectSubset<T, UserExtraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExtra.
     * @param {UserExtraDeleteArgs} args - Arguments to delete one UserExtra.
     * @example
     * // Delete one UserExtra
     * const UserExtra = await prisma.userExtra.delete({
     *   where: {
     *     // ... filter to delete one UserExtra
     *   }
     * })
     * 
     */
    delete<T extends UserExtraDeleteArgs>(args: SelectSubset<T, UserExtraDeleteArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserExtra.
     * @param {UserExtraUpdateArgs} args - Arguments to update one UserExtra.
     * @example
     * // Update one UserExtra
     * const userExtra = await prisma.userExtra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExtraUpdateArgs>(args: SelectSubset<T, UserExtraUpdateArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserExtras.
     * @param {UserExtraDeleteManyArgs} args - Arguments to filter UserExtras to delete.
     * @example
     * // Delete a few UserExtras
     * const { count } = await prisma.userExtra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExtraDeleteManyArgs>(args?: SelectSubset<T, UserExtraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExtras
     * const userExtra = await prisma.userExtra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExtraUpdateManyArgs>(args: SelectSubset<T, UserExtraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExtra.
     * @param {UserExtraUpsertArgs} args - Arguments to update or create a UserExtra.
     * @example
     * // Update or create a UserExtra
     * const userExtra = await prisma.userExtra.upsert({
     *   create: {
     *     // ... data to create a UserExtra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExtra we want to update
     *   }
     * })
     */
    upsert<T extends UserExtraUpsertArgs>(args: SelectSubset<T, UserExtraUpsertArgs<ExtArgs>>): Prisma__UserExtraClient<$Result.GetResult<Prisma.$UserExtraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraCountArgs} args - Arguments to filter UserExtras to count.
     * @example
     * // Count the number of UserExtras
     * const count = await prisma.userExtra.count({
     *   where: {
     *     // ... the filter for the UserExtras we want to count
     *   }
     * })
    **/
    count<T extends UserExtraCountArgs>(
      args?: Subset<T, UserExtraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExtra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExtraAggregateArgs>(args: Subset<T, UserExtraAggregateArgs>): Prisma.PrismaPromise<GetUserExtraAggregateType<T>>

    /**
     * Group by UserExtra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExtraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExtraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExtraGroupByArgs['orderBy'] }
        : { orderBy?: UserExtraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExtraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExtra model
   */
  readonly fields: UserExtraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExtra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExtraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExtra model
   */
  interface UserExtraFieldRefs {
    readonly id: FieldRef<"UserExtra", 'Int'>
    readonly userId: FieldRef<"UserExtra", 'Int'>
    readonly name: FieldRef<"UserExtra", 'String'>
    readonly license_number: FieldRef<"UserExtra", 'String'>
    readonly license_expiry: FieldRef<"UserExtra", 'DateTime'>
    readonly experience_years: FieldRef<"UserExtra", 'Int'>
    readonly address: FieldRef<"UserExtra", 'String'>
    readonly emergency_contact: FieldRef<"UserExtra", 'String'>
    readonly active: FieldRef<"UserExtra", 'Boolean'>
    readonly created_at: FieldRef<"UserExtra", 'DateTime'>
    readonly updated_at: FieldRef<"UserExtra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserExtra findUnique
   */
  export type UserExtraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter, which UserExtra to fetch.
     */
    where: UserExtraWhereUniqueInput
  }

  /**
   * UserExtra findUniqueOrThrow
   */
  export type UserExtraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter, which UserExtra to fetch.
     */
    where: UserExtraWhereUniqueInput
  }

  /**
   * UserExtra findFirst
   */
  export type UserExtraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter, which UserExtra to fetch.
     */
    where?: UserExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExtras to fetch.
     */
    orderBy?: UserExtraOrderByWithRelationInput | UserExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExtras.
     */
    cursor?: UserExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExtras.
     */
    distinct?: UserExtraScalarFieldEnum | UserExtraScalarFieldEnum[]
  }

  /**
   * UserExtra findFirstOrThrow
   */
  export type UserExtraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter, which UserExtra to fetch.
     */
    where?: UserExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExtras to fetch.
     */
    orderBy?: UserExtraOrderByWithRelationInput | UserExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExtras.
     */
    cursor?: UserExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExtras.
     */
    distinct?: UserExtraScalarFieldEnum | UserExtraScalarFieldEnum[]
  }

  /**
   * UserExtra findMany
   */
  export type UserExtraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter, which UserExtras to fetch.
     */
    where?: UserExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExtras to fetch.
     */
    orderBy?: UserExtraOrderByWithRelationInput | UserExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExtras.
     */
    cursor?: UserExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExtras.
     */
    skip?: number
    distinct?: UserExtraScalarFieldEnum | UserExtraScalarFieldEnum[]
  }

  /**
   * UserExtra create
   */
  export type UserExtraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExtra.
     */
    data: XOR<UserExtraCreateInput, UserExtraUncheckedCreateInput>
  }

  /**
   * UserExtra createMany
   */
  export type UserExtraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExtras.
     */
    data: UserExtraCreateManyInput | UserExtraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserExtra update
   */
  export type UserExtraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExtra.
     */
    data: XOR<UserExtraUpdateInput, UserExtraUncheckedUpdateInput>
    /**
     * Choose, which UserExtra to update.
     */
    where: UserExtraWhereUniqueInput
  }

  /**
   * UserExtra updateMany
   */
  export type UserExtraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExtras.
     */
    data: XOR<UserExtraUpdateManyMutationInput, UserExtraUncheckedUpdateManyInput>
    /**
     * Filter which UserExtras to update
     */
    where?: UserExtraWhereInput
    /**
     * Limit how many UserExtras to update.
     */
    limit?: number
  }

  /**
   * UserExtra upsert
   */
  export type UserExtraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExtra to update in case it exists.
     */
    where: UserExtraWhereUniqueInput
    /**
     * In case the UserExtra found by the `where` argument doesn't exist, create a new UserExtra with this data.
     */
    create: XOR<UserExtraCreateInput, UserExtraUncheckedCreateInput>
    /**
     * In case the UserExtra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExtraUpdateInput, UserExtraUncheckedUpdateInput>
  }

  /**
   * UserExtra delete
   */
  export type UserExtraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
    /**
     * Filter which UserExtra to delete.
     */
    where: UserExtraWhereUniqueInput
  }

  /**
   * UserExtra deleteMany
   */
  export type UserExtraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExtras to delete
     */
    where?: UserExtraWhereInput
    /**
     * Limit how many UserExtras to delete.
     */
    limit?: number
  }

  /**
   * UserExtra without action
   */
  export type UserExtraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExtra
     */
    select?: UserExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExtra
     */
    omit?: UserExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExtraInclude<ExtArgs> | null
  }


  /**
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OTPSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OTPMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    otp_code: string | null
    otp_type: $Enums.OTPType | null
    expires_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type OTPMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    otp_code: string | null
    otp_type: $Enums.OTPType | null
    expires_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    user_id: number
    otp_code: number
    otp_type: number
    expires_at: number
    is_used: number
    created_at: number
    _all: number
  }


  export type OTPAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OTPSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OTPMinAggregateInputType = {
    id?: true
    user_id?: true
    otp_code?: true
    otp_type?: true
    expires_at?: true
    is_used?: true
    created_at?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    user_id?: true
    otp_code?: true
    otp_type?: true
    expires_at?: true
    is_used?: true
    created_at?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    user_id?: true
    otp_code?: true
    otp_type?: true
    expires_at?: true
    is_used?: true
    created_at?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _avg?: OTPAvgAggregateInputType
    _sum?: OTPSumAggregateInputType
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: number
    user_id: number
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date
    is_used: boolean
    created_at: Date
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otp_code?: boolean
    otp_type?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>



  export type OTPSelectScalar = {
    id?: boolean
    user_id?: boolean
    otp_code?: boolean
    otp_type?: boolean
    expires_at?: boolean
    is_used?: boolean
    created_at?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "otp_code" | "otp_type" | "expires_at" | "is_used" | "created_at", ExtArgs["result"]["oTP"]>
  export type OTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      otp_code: string
      otp_type: $Enums.OTPType
      expires_at: Date
      is_used: boolean
      created_at: Date
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OTP model
   */
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'Int'>
    readonly user_id: FieldRef<"OTP", 'Int'>
    readonly otp_code: FieldRef<"OTP", 'String'>
    readonly otp_type: FieldRef<"OTP", 'OTPType'>
    readonly expires_at: FieldRef<"OTP", 'DateTime'>
    readonly is_used: FieldRef<"OTP", 'Boolean'>
    readonly created_at: FieldRef<"OTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to delete.
     */
    limit?: number
  }

  /**
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bus_number: 'bus_number',
    capacity: 'capacity',
    route_id: 'route_id',
    driver_id: 'driver_id',
    conductor_id: 'conductor_id',
    status: 'status',
    current_location: 'current_location',
    fuel_level: 'fuel_level',
    last_maintenance: 'last_maintenance',
    insurance_expiry: 'insurance_expiry',
    permit_expiry: 'permit_expiry',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    bus_id: 'bus_id',
    package_number: 'package_number',
    sender_name: 'sender_name',
    sender_phone: 'sender_phone',
    receiver_name: 'receiver_name',
    receiver_phone: 'receiver_phone',
    from_stop: 'from_stop',
    to_stop: 'to_stop',
    description: 'description',
    weight: 'weight',
    fare: 'fare',
    status: 'status',
    booked_at: 'booked_at',
    delivered_at: 'delivered_at',
    trip_id: 'trip_id'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const POSMachineScalarFieldEnum: {
    id: 'id',
    serial_no: 'serial_no',
    assigned: 'assigned',
    assigned_at: 'assigned_at',
    status: 'status',
    bus_id: 'bus_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type POSMachineScalarFieldEnum = (typeof POSMachineScalarFieldEnum)[keyof typeof POSMachineScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    bus_id: 'bus_id',
    report_date: 'report_date',
    total_passengers: 'total_passengers',
    total_revenue: 'total_revenue',
    total_packages: 'total_packages',
    package_revenue: 'package_revenue',
    fuel_cost: 'fuel_cost',
    maintenance_cost: 'maintenance_cost',
    created_at: 'created_at'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    code: 'code',
    distance: 'distance',
    base_fare: 'base_fare',
    per_km_rate: 'per_km_rate',
    stops: 'stops',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    bus_id: 'bus_id',
    ticket_number: 'ticket_number',
    passenger_name: 'passenger_name',
    passenger_phone: 'passenger_phone',
    from_stop: 'from_stop',
    to_stop: 'to_stop',
    passenger_type: 'passenger_type',
    fare: 'fare',
    issue_time: 'issue_time',
    journey_date: 'journey_date',
    status: 'status',
    seat_no: 'seat_no',
    pos_machine_id: 'pos_machine_id',
    payment_mode: 'payment_mode',
    trip_id: 'trip_id'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    bus_id: 'bus_id',
    route_id: 'route_id',
    start_time: 'start_time',
    end_time: 'end_time',
    status: 'status',
    driver_id: 'driver_id',
    conductor_id: 'conductor_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    company_name: 'company_name',
    is_verified: 'is_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserExtraScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    license_number: 'license_number',
    license_expiry: 'license_expiry',
    experience_years: 'experience_years',
    address: 'address',
    emergency_contact: 'emergency_contact',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserExtraScalarFieldEnum = (typeof UserExtraScalarFieldEnum)[keyof typeof UserExtraScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    otp_code: 'otp_code',
    otp_type: 'otp_type',
    expires_at: 'expires_at',
    is_used: 'is_used',
    created_at: 'created_at'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BusOrderByRelevanceFieldEnum: {
    bus_number: 'bus_number',
    current_location: 'current_location'
  };

  export type BusOrderByRelevanceFieldEnum = (typeof BusOrderByRelevanceFieldEnum)[keyof typeof BusOrderByRelevanceFieldEnum]


  export const PackageOrderByRelevanceFieldEnum: {
    package_number: 'package_number',
    sender_name: 'sender_name',
    sender_phone: 'sender_phone',
    receiver_name: 'receiver_name',
    receiver_phone: 'receiver_phone',
    from_stop: 'from_stop',
    to_stop: 'to_stop',
    description: 'description'
  };

  export type PackageOrderByRelevanceFieldEnum = (typeof PackageOrderByRelevanceFieldEnum)[keyof typeof PackageOrderByRelevanceFieldEnum]


  export const POSMachineOrderByRelevanceFieldEnum: {
    serial_no: 'serial_no'
  };

  export type POSMachineOrderByRelevanceFieldEnum = (typeof POSMachineOrderByRelevanceFieldEnum)[keyof typeof POSMachineOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RouteOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code'
  };

  export type RouteOrderByRelevanceFieldEnum = (typeof RouteOrderByRelevanceFieldEnum)[keyof typeof RouteOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    ticket_number: 'ticket_number',
    passenger_name: 'passenger_name',
    passenger_phone: 'passenger_phone',
    from_stop: 'from_stop',
    to_stop: 'to_stop'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    company_name: 'company_name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserExtraOrderByRelevanceFieldEnum: {
    name: 'name',
    license_number: 'license_number',
    address: 'address',
    emergency_contact: 'emergency_contact'
  };

  export type UserExtraOrderByRelevanceFieldEnum = (typeof UserExtraOrderByRelevanceFieldEnum)[keyof typeof UserExtraOrderByRelevanceFieldEnum]


  export const OTPOrderByRelevanceFieldEnum: {
    otp_code: 'otp_code'
  };

  export type OTPOrderByRelevanceFieldEnum = (typeof OTPOrderByRelevanceFieldEnum)[keyof typeof OTPOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BusStatus'
   */
  export type EnumBusStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PackageStatus'
   */
  export type EnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'POSStatus'
   */
  export type EnumPOSStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'POSStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PassengerType'
   */
  export type EnumPassengerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PassengerType'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'PaymentMode'
   */
  export type EnumPaymentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMode'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'OTPType'
   */
  export type EnumOTPTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OTPType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: IntFilter<"Bus"> | number
    user_id?: IntFilter<"Bus"> | number
    bus_number?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    route_id?: IntNullableFilter<"Bus"> | number | null
    driver_id?: IntNullableFilter<"Bus"> | number | null
    conductor_id?: IntNullableFilter<"Bus"> | number | null
    status?: EnumBusStatusFilter<"Bus"> | $Enums.BusStatus
    current_location?: StringNullableFilter<"Bus"> | string | null
    fuel_level?: DecimalNullableFilter<"Bus"> | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: DateTimeNullableFilter<"Bus"> | Date | string | null
    insurance_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    permit_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    created_at?: DateTimeFilter<"Bus"> | Date | string
    updated_at?: DateTimeFilter<"Bus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    posMachines?: POSMachineListRelationFilter
    trips?: TripListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bus_number?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    conductor_id?: SortOrderInput | SortOrder
    status?: SortOrder
    current_location?: SortOrderInput | SortOrder
    fuel_level?: SortOrderInput | SortOrder
    last_maintenance?: SortOrderInput | SortOrder
    insurance_expiry?: SortOrderInput | SortOrder
    permit_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    driver?: UserOrderByWithRelationInput
    conductor?: UserOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    packages?: PackageOrderByRelationAggregateInput
    dailyReports?: DailyReportOrderByRelationAggregateInput
    posMachines?: POSMachineOrderByRelationAggregateInput
    trips?: TripOrderByRelationAggregateInput
    _relevance?: BusOrderByRelevanceInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bus_number?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    user_id?: IntFilter<"Bus"> | number
    capacity?: IntFilter<"Bus"> | number
    route_id?: IntNullableFilter<"Bus"> | number | null
    driver_id?: IntNullableFilter<"Bus"> | number | null
    conductor_id?: IntNullableFilter<"Bus"> | number | null
    status?: EnumBusStatusFilter<"Bus"> | $Enums.BusStatus
    current_location?: StringNullableFilter<"Bus"> | string | null
    fuel_level?: DecimalNullableFilter<"Bus"> | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: DateTimeNullableFilter<"Bus"> | Date | string | null
    insurance_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    permit_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    created_at?: DateTimeFilter<"Bus"> | Date | string
    updated_at?: DateTimeFilter<"Bus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    posMachines?: POSMachineListRelationFilter
    trips?: TripListRelationFilter
  }, "id" | "bus_number">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bus_number?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    conductor_id?: SortOrderInput | SortOrder
    status?: SortOrder
    current_location?: SortOrderInput | SortOrder
    fuel_level?: SortOrderInput | SortOrder
    last_maintenance?: SortOrderInput | SortOrder
    insurance_expiry?: SortOrderInput | SortOrder
    permit_expiry?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bus"> | number
    user_id?: IntWithAggregatesFilter<"Bus"> | number
    bus_number?: StringWithAggregatesFilter<"Bus"> | string
    capacity?: IntWithAggregatesFilter<"Bus"> | number
    route_id?: IntNullableWithAggregatesFilter<"Bus"> | number | null
    driver_id?: IntNullableWithAggregatesFilter<"Bus"> | number | null
    conductor_id?: IntNullableWithAggregatesFilter<"Bus"> | number | null
    status?: EnumBusStatusWithAggregatesFilter<"Bus"> | $Enums.BusStatus
    current_location?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    fuel_level?: DecimalNullableWithAggregatesFilter<"Bus"> | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: DateTimeNullableWithAggregatesFilter<"Bus"> | Date | string | null
    insurance_expiry?: DateTimeNullableWithAggregatesFilter<"Bus"> | Date | string | null
    permit_expiry?: DateTimeNullableWithAggregatesFilter<"Bus"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: IntFilter<"Package"> | number
    bus_id?: IntFilter<"Package"> | number
    package_number?: StringFilter<"Package"> | string
    sender_name?: StringFilter<"Package"> | string
    sender_phone?: StringFilter<"Package"> | string
    receiver_name?: StringFilter<"Package"> | string
    receiver_phone?: StringFilter<"Package"> | string
    from_stop?: StringFilter<"Package"> | string
    to_stop?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: DecimalNullableFilter<"Package"> | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    booked_at?: DateTimeFilter<"Package"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Package"> | Date | string | null
    trip_id?: IntNullableFilter<"Package"> | number | null
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    package_number?: SortOrder
    sender_name?: SortOrder
    sender_phone?: SortOrder
    receiver_name?: SortOrder
    receiver_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    fare?: SortOrder
    status?: SortOrder
    booked_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    trip_id?: SortOrderInput | SortOrder
    bus?: BusOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
    _relevance?: PackageOrderByRelevanceInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    package_number?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    bus_id?: IntFilter<"Package"> | number
    sender_name?: StringFilter<"Package"> | string
    sender_phone?: StringFilter<"Package"> | string
    receiver_name?: StringFilter<"Package"> | string
    receiver_phone?: StringFilter<"Package"> | string
    from_stop?: StringFilter<"Package"> | string
    to_stop?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: DecimalNullableFilter<"Package"> | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    booked_at?: DateTimeFilter<"Package"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Package"> | Date | string | null
    trip_id?: IntNullableFilter<"Package"> | number | null
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id" | "package_number">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    package_number?: SortOrder
    sender_name?: SortOrder
    sender_phone?: SortOrder
    receiver_name?: SortOrder
    receiver_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    description?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    fare?: SortOrder
    status?: SortOrder
    booked_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    trip_id?: SortOrderInput | SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Package"> | number
    bus_id?: IntWithAggregatesFilter<"Package"> | number
    package_number?: StringWithAggregatesFilter<"Package"> | string
    sender_name?: StringWithAggregatesFilter<"Package"> | string
    sender_phone?: StringWithAggregatesFilter<"Package"> | string
    receiver_name?: StringWithAggregatesFilter<"Package"> | string
    receiver_phone?: StringWithAggregatesFilter<"Package"> | string
    from_stop?: StringWithAggregatesFilter<"Package"> | string
    to_stop?: StringWithAggregatesFilter<"Package"> | string
    description?: StringNullableWithAggregatesFilter<"Package"> | string | null
    weight?: DecimalNullableWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusWithAggregatesFilter<"Package"> | $Enums.PackageStatus
    booked_at?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    delivered_at?: DateTimeNullableWithAggregatesFilter<"Package"> | Date | string | null
    trip_id?: IntNullableWithAggregatesFilter<"Package"> | number | null
  }

  export type POSMachineWhereInput = {
    AND?: POSMachineWhereInput | POSMachineWhereInput[]
    OR?: POSMachineWhereInput[]
    NOT?: POSMachineWhereInput | POSMachineWhereInput[]
    id?: IntFilter<"POSMachine"> | number
    serial_no?: StringFilter<"POSMachine"> | string
    assigned?: BoolFilter<"POSMachine"> | boolean
    assigned_at?: DateTimeNullableFilter<"POSMachine"> | Date | string | null
    status?: EnumPOSStatusFilter<"POSMachine"> | $Enums.POSStatus
    bus_id?: IntNullableFilter<"POSMachine"> | number | null
    created_at?: DateTimeFilter<"POSMachine"> | Date | string
    updated_at?: DateTimeFilter<"POSMachine"> | Date | string
    bus?: XOR<BusNullableScalarRelationFilter, BusWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type POSMachineOrderByWithRelationInput = {
    id?: SortOrder
    serial_no?: SortOrder
    assigned?: SortOrder
    assigned_at?: SortOrderInput | SortOrder
    status?: SortOrder
    bus_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bus?: BusOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    _relevance?: POSMachineOrderByRelevanceInput
  }

  export type POSMachineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serial_no?: string
    AND?: POSMachineWhereInput | POSMachineWhereInput[]
    OR?: POSMachineWhereInput[]
    NOT?: POSMachineWhereInput | POSMachineWhereInput[]
    assigned?: BoolFilter<"POSMachine"> | boolean
    assigned_at?: DateTimeNullableFilter<"POSMachine"> | Date | string | null
    status?: EnumPOSStatusFilter<"POSMachine"> | $Enums.POSStatus
    bus_id?: IntNullableFilter<"POSMachine"> | number | null
    created_at?: DateTimeFilter<"POSMachine"> | Date | string
    updated_at?: DateTimeFilter<"POSMachine"> | Date | string
    bus?: XOR<BusNullableScalarRelationFilter, BusWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "id" | "serial_no">

  export type POSMachineOrderByWithAggregationInput = {
    id?: SortOrder
    serial_no?: SortOrder
    assigned?: SortOrder
    assigned_at?: SortOrderInput | SortOrder
    status?: SortOrder
    bus_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: POSMachineCountOrderByAggregateInput
    _avg?: POSMachineAvgOrderByAggregateInput
    _max?: POSMachineMaxOrderByAggregateInput
    _min?: POSMachineMinOrderByAggregateInput
    _sum?: POSMachineSumOrderByAggregateInput
  }

  export type POSMachineScalarWhereWithAggregatesInput = {
    AND?: POSMachineScalarWhereWithAggregatesInput | POSMachineScalarWhereWithAggregatesInput[]
    OR?: POSMachineScalarWhereWithAggregatesInput[]
    NOT?: POSMachineScalarWhereWithAggregatesInput | POSMachineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"POSMachine"> | number
    serial_no?: StringWithAggregatesFilter<"POSMachine"> | string
    assigned?: BoolWithAggregatesFilter<"POSMachine"> | boolean
    assigned_at?: DateTimeNullableWithAggregatesFilter<"POSMachine"> | Date | string | null
    status?: EnumPOSStatusWithAggregatesFilter<"POSMachine"> | $Enums.POSStatus
    bus_id?: IntNullableWithAggregatesFilter<"POSMachine"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"POSMachine"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"POSMachine"> | Date | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: IntFilter<"DailyReport"> | number
    bus_id?: IntFilter<"DailyReport"> | number
    report_date?: DateTimeFilter<"DailyReport"> | Date | string
    total_passengers?: IntFilter<"DailyReport"> | number
    total_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    total_packages?: IntFilter<"DailyReport"> | number
    package_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"DailyReport"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    report_date?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
    created_at?: SortOrder
    bus?: BusOrderByWithRelationInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_bus_date?: DailyReportUnique_bus_dateCompoundUniqueInput
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    bus_id?: IntFilter<"DailyReport"> | number
    report_date?: DateTimeFilter<"DailyReport"> | Date | string
    total_passengers?: IntFilter<"DailyReport"> | number
    total_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    total_packages?: IntFilter<"DailyReport"> | number
    package_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"DailyReport"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }, "id" | "unique_bus_date">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    report_date?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
    created_at?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyReport"> | number
    bus_id?: IntWithAggregatesFilter<"DailyReport"> | number
    report_date?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    total_passengers?: IntWithAggregatesFilter<"DailyReport"> | number
    total_revenue?: DecimalWithAggregatesFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    total_packages?: IntWithAggregatesFilter<"DailyReport"> | number
    package_revenue?: DecimalWithAggregatesFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalWithAggregatesFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalWithAggregatesFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    user_id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    code?: StringFilter<"Route"> | string
    distance?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    stops?: JsonFilter<"Route">
    active?: BoolFilter<"Route"> | boolean
    created_at?: DateTimeFilter<"Route"> | Date | string
    updated_at?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
    trips?: TripListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
    stops?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    buses?: BusOrderByRelationAggregateInput
    trips?: TripOrderByRelationAggregateInput
    _relevance?: RouteOrderByRelevanceInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    user_id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    distance?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    stops?: JsonFilter<"Route">
    active?: BoolFilter<"Route"> | boolean
    created_at?: DateTimeFilter<"Route"> | Date | string
    updated_at?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
    trips?: TripListRelationFilter
  }, "id" | "code">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
    stops?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    user_id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    code?: StringWithAggregatesFilter<"Route"> | string
    distance?: DecimalWithAggregatesFilter<"Route"> | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalWithAggregatesFilter<"Route"> | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalWithAggregatesFilter<"Route"> | Decimal | DecimalJsLike | number | string
    stops?: JsonWithAggregatesFilter<"Route">
    active?: BoolWithAggregatesFilter<"Route"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    bus_id?: IntFilter<"Ticket"> | number
    ticket_number?: StringFilter<"Ticket"> | string
    passenger_name?: StringNullableFilter<"Ticket"> | string | null
    passenger_phone?: StringNullableFilter<"Ticket"> | string | null
    from_stop?: StringFilter<"Ticket"> | string
    to_stop?: StringFilter<"Ticket"> | string
    passenger_type?: EnumPassengerTypeFilter<"Ticket"> | $Enums.PassengerType
    fare?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFilter<"Ticket"> | Date | string
    journey_date?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    seat_no?: IntNullableFilter<"Ticket"> | number | null
    pos_machine_id?: IntNullableFilter<"Ticket"> | number | null
    payment_mode?: EnumPaymentModeFilter<"Ticket"> | $Enums.PaymentMode
    trip_id?: IntNullableFilter<"Ticket"> | number | null
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    posMachine?: XOR<POSMachineNullableScalarRelationFilter, POSMachineWhereInput> | null
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    ticket_number?: SortOrder
    passenger_name?: SortOrderInput | SortOrder
    passenger_phone?: SortOrderInput | SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    passenger_type?: SortOrder
    fare?: SortOrder
    issue_time?: SortOrder
    journey_date?: SortOrder
    status?: SortOrder
    seat_no?: SortOrderInput | SortOrder
    pos_machine_id?: SortOrderInput | SortOrder
    payment_mode?: SortOrder
    trip_id?: SortOrderInput | SortOrder
    bus?: BusOrderByWithRelationInput
    posMachine?: POSMachineOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_number?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    bus_id?: IntFilter<"Ticket"> | number
    passenger_name?: StringNullableFilter<"Ticket"> | string | null
    passenger_phone?: StringNullableFilter<"Ticket"> | string | null
    from_stop?: StringFilter<"Ticket"> | string
    to_stop?: StringFilter<"Ticket"> | string
    passenger_type?: EnumPassengerTypeFilter<"Ticket"> | $Enums.PassengerType
    fare?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFilter<"Ticket"> | Date | string
    journey_date?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    seat_no?: IntNullableFilter<"Ticket"> | number | null
    pos_machine_id?: IntNullableFilter<"Ticket"> | number | null
    payment_mode?: EnumPaymentModeFilter<"Ticket"> | $Enums.PaymentMode
    trip_id?: IntNullableFilter<"Ticket"> | number | null
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    posMachine?: XOR<POSMachineNullableScalarRelationFilter, POSMachineWhereInput> | null
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id" | "ticket_number">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    ticket_number?: SortOrder
    passenger_name?: SortOrderInput | SortOrder
    passenger_phone?: SortOrderInput | SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    passenger_type?: SortOrder
    fare?: SortOrder
    issue_time?: SortOrder
    journey_date?: SortOrder
    status?: SortOrder
    seat_no?: SortOrderInput | SortOrder
    pos_machine_id?: SortOrderInput | SortOrder
    payment_mode?: SortOrder
    trip_id?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    bus_id?: IntWithAggregatesFilter<"Ticket"> | number
    ticket_number?: StringWithAggregatesFilter<"Ticket"> | string
    passenger_name?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    passenger_phone?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    from_stop?: StringWithAggregatesFilter<"Ticket"> | string
    to_stop?: StringWithAggregatesFilter<"Ticket"> | string
    passenger_type?: EnumPassengerTypeWithAggregatesFilter<"Ticket"> | $Enums.PassengerType
    fare?: DecimalWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    journey_date?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    seat_no?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    pos_machine_id?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    payment_mode?: EnumPaymentModeWithAggregatesFilter<"Ticket"> | $Enums.PaymentMode
    trip_id?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    bus_id?: IntFilter<"Trip"> | number
    route_id?: IntFilter<"Trip"> | number
    start_time?: DateTimeFilter<"Trip"> | Date | string
    end_time?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    driver_id?: IntNullableFilter<"Trip"> | number | null
    conductor_id?: IntNullableFilter<"Trip"> | number | null
    created_at?: DateTimeFilter<"Trip"> | Date | string
    updated_at?: DateTimeFilter<"Trip"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    status?: SortOrder
    driver_id?: SortOrderInput | SortOrder
    conductor_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bus?: BusOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    driver?: UserOrderByWithRelationInput
    conductor?: UserOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    packages?: PackageOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    bus_id?: IntFilter<"Trip"> | number
    route_id?: IntFilter<"Trip"> | number
    start_time?: DateTimeFilter<"Trip"> | Date | string
    end_time?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    driver_id?: IntNullableFilter<"Trip"> | number | null
    conductor_id?: IntNullableFilter<"Trip"> | number | null
    created_at?: DateTimeFilter<"Trip"> | Date | string
    updated_at?: DateTimeFilter<"Trip"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    status?: SortOrder
    driver_id?: SortOrderInput | SortOrder
    conductor_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    bus_id?: IntWithAggregatesFilter<"Trip"> | number
    route_id?: IntWithAggregatesFilter<"Trip"> | number
    start_time?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    driver_id?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    conductor_id?: IntNullableWithAggregatesFilter<"Trip"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    company_name?: StringNullableFilter<"User"> | string | null
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    userExtra?: XOR<UserExtraNullableScalarRelationFilter, UserExtraWhereInput> | null
    busesDriven?: BusListRelationFilter
    busesConducted?: BusListRelationFilter
    tripsDriven?: TripListRelationFilter
    tripsConducted?: TripListRelationFilter
    routes?: RouteListRelationFilter
    buses?: BusListRelationFilter
    otps?: OTPListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrder
    role?: SortOrder
    company_name?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userExtra?: UserExtraOrderByWithRelationInput
    busesDriven?: BusOrderByRelationAggregateInput
    busesConducted?: BusOrderByRelationAggregateInput
    tripsDriven?: TripOrderByRelationAggregateInput
    tripsConducted?: TripOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
    buses?: BusOrderByRelationAggregateInput
    otps?: OTPOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    company_name?: StringNullableFilter<"User"> | string | null
    is_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    userExtra?: XOR<UserExtraNullableScalarRelationFilter, UserExtraWhereInput> | null
    busesDriven?: BusListRelationFilter
    busesConducted?: BusListRelationFilter
    tripsDriven?: TripListRelationFilter
    tripsConducted?: TripListRelationFilter
    routes?: RouteListRelationFilter
    buses?: BusListRelationFilter
    otps?: OTPListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrder
    role?: SortOrder
    company_name?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    company_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserExtraWhereInput = {
    AND?: UserExtraWhereInput | UserExtraWhereInput[]
    OR?: UserExtraWhereInput[]
    NOT?: UserExtraWhereInput | UserExtraWhereInput[]
    id?: IntFilter<"UserExtra"> | number
    userId?: IntFilter<"UserExtra"> | number
    name?: StringNullableFilter<"UserExtra"> | string | null
    license_number?: StringNullableFilter<"UserExtra"> | string | null
    license_expiry?: DateTimeNullableFilter<"UserExtra"> | Date | string | null
    experience_years?: IntFilter<"UserExtra"> | number
    address?: StringNullableFilter<"UserExtra"> | string | null
    emergency_contact?: StringNullableFilter<"UserExtra"> | string | null
    active?: BoolFilter<"UserExtra"> | boolean
    created_at?: DateTimeFilter<"UserExtra"> | Date | string
    updated_at?: DateTimeFilter<"UserExtra"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserExtraOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    license_number?: SortOrderInput | SortOrder
    license_expiry?: SortOrderInput | SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserExtraOrderByRelevanceInput
  }

  export type UserExtraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserExtraWhereInput | UserExtraWhereInput[]
    OR?: UserExtraWhereInput[]
    NOT?: UserExtraWhereInput | UserExtraWhereInput[]
    name?: StringNullableFilter<"UserExtra"> | string | null
    license_number?: StringNullableFilter<"UserExtra"> | string | null
    license_expiry?: DateTimeNullableFilter<"UserExtra"> | Date | string | null
    experience_years?: IntFilter<"UserExtra"> | number
    address?: StringNullableFilter<"UserExtra"> | string | null
    emergency_contact?: StringNullableFilter<"UserExtra"> | string | null
    active?: BoolFilter<"UserExtra"> | boolean
    created_at?: DateTimeFilter<"UserExtra"> | Date | string
    updated_at?: DateTimeFilter<"UserExtra"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserExtraOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    license_number?: SortOrderInput | SortOrder
    license_expiry?: SortOrderInput | SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserExtraCountOrderByAggregateInput
    _avg?: UserExtraAvgOrderByAggregateInput
    _max?: UserExtraMaxOrderByAggregateInput
    _min?: UserExtraMinOrderByAggregateInput
    _sum?: UserExtraSumOrderByAggregateInput
  }

  export type UserExtraScalarWhereWithAggregatesInput = {
    AND?: UserExtraScalarWhereWithAggregatesInput | UserExtraScalarWhereWithAggregatesInput[]
    OR?: UserExtraScalarWhereWithAggregatesInput[]
    NOT?: UserExtraScalarWhereWithAggregatesInput | UserExtraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserExtra"> | number
    userId?: IntWithAggregatesFilter<"UserExtra"> | number
    name?: StringNullableWithAggregatesFilter<"UserExtra"> | string | null
    license_number?: StringNullableWithAggregatesFilter<"UserExtra"> | string | null
    license_expiry?: DateTimeNullableWithAggregatesFilter<"UserExtra"> | Date | string | null
    experience_years?: IntWithAggregatesFilter<"UserExtra"> | number
    address?: StringNullableWithAggregatesFilter<"UserExtra"> | string | null
    emergency_contact?: StringNullableWithAggregatesFilter<"UserExtra"> | string | null
    active?: BoolWithAggregatesFilter<"UserExtra"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"UserExtra"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserExtra"> | Date | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: IntFilter<"OTP"> | number
    user_id?: IntFilter<"OTP"> | number
    otp_code?: StringFilter<"OTP"> | string
    otp_type?: EnumOTPTypeFilter<"OTP"> | $Enums.OTPType
    expires_at?: DateTimeFilter<"OTP"> | Date | string
    is_used?: BoolFilter<"OTP"> | boolean
    created_at?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    otp_type?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: OTPOrderByRelevanceInput
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    user_id?: IntFilter<"OTP"> | number
    otp_code?: StringFilter<"OTP"> | string
    otp_type?: EnumOTPTypeFilter<"OTP"> | $Enums.OTPType
    expires_at?: DateTimeFilter<"OTP"> | Date | string
    is_used?: BoolFilter<"OTP"> | boolean
    created_at?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    otp_type?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _avg?: OTPAvgOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
    _sum?: OTPSumOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OTP"> | number
    user_id?: IntWithAggregatesFilter<"OTP"> | number
    otp_code?: StringWithAggregatesFilter<"OTP"> | string
    otp_type?: EnumOTPTypeWithAggregatesFilter<"OTP"> | $Enums.OTPType
    expires_at?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    is_used?: BoolWithAggregatesFilter<"OTP"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
  }

  export type BusCreateInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BusUpdateManyMutationInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    bus: BusCreateNestedOneWithoutPackagesInput
    trip?: TripCreateNestedOneWithoutPackagesInput
  }

  export type PackageUncheckedCreateInput = {
    id?: number
    bus_id: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    trip_id?: number | null
  }

  export type PackageUpdateInput = {
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bus?: BusUpdateOneRequiredWithoutPackagesNestedInput
    trip?: TripUpdateOneWithoutPackagesNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PackageCreateManyInput = {
    id?: number
    bus_id: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    trip_id?: number | null
  }

  export type PackageUpdateManyMutationInput = {
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type POSMachineCreateInput = {
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus?: BusCreateNestedOneWithoutPosMachinesInput
    tickets?: TicketCreateNestedManyWithoutPosMachineInput
  }

  export type POSMachineUncheckedCreateInput = {
    id?: number
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    bus_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutPosMachineInput
  }

  export type POSMachineUpdateInput = {
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneWithoutPosMachinesNestedInput
    tickets?: TicketUpdateManyWithoutPosMachineNestedInput
  }

  export type POSMachineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    bus_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutPosMachineNestedInput
  }

  export type POSMachineCreateManyInput = {
    id?: number
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    bus_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type POSMachineUpdateManyMutationInput = {
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSMachineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    bus_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateInput = {
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    bus: BusCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyReportUncheckedCreateInput = {
    id?: number
    bus_id: number
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type DailyReportUpdateInput = {
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateManyInput = {
    id?: number
    bus_id: number
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type DailyReportUpdateManyMutationInput = {
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    buses?: BusCreateNestedManyWithoutRouteInput
    trips?: TripCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    trips?: TripUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    buses?: BusUpdateManyWithoutRouteNestedInput
    trips?: TripUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    trips?: TripUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    user_id: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    bus: BusCreateNestedOneWithoutTicketsInput
    posMachine?: POSMachineCreateNestedOneWithoutTicketsInput
    trip?: TripCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type TicketUpdateInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    posMachine?: POSMachineUpdateOneWithoutTicketsNestedInput
    trip?: TripUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type TicketUpdateManyMutationInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripCreateInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    route: RouteCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    tickets?: TicketCreateNestedManyWithoutTripInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExtraCreateInput = {
    name?: string | null
    license_number?: string | null
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserExtraInput
  }

  export type UserExtraUncheckedCreateInput = {
    id?: number
    userId: number
    name?: string | null
    license_number?: string | null
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserExtraUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExtraNestedInput
  }

  export type UserExtraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExtraCreateManyInput = {
    id?: number
    userId: number
    name?: string | null
    license_number?: string | null
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserExtraUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExtraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateInput = {
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutOtpsInput
  }

  export type OTPUncheckedCreateInput = {
    id?: number
    user_id: number
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type OTPUpdateInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type OTPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateManyInput = {
    id?: number
    user_id: number
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type OTPUpdateManyMutationInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumBusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BusStatus | EnumBusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusStatus[]
    notIn?: $Enums.BusStatus[]
    not?: NestedEnumBusStatusFilter<$PrismaModel> | $Enums.BusStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RouteNullableScalarRelationFilter = {
    is?: RouteWhereInput | null
    isNot?: RouteWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type POSMachineListRelationFilter = {
    every?: POSMachineWhereInput
    some?: POSMachineWhereInput
    none?: POSMachineWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type POSMachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusOrderByRelevanceInput = {
    fields: BusOrderByRelevanceFieldEnum | BusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bus_number?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    status?: SortOrder
    current_location?: SortOrder
    fuel_level?: SortOrder
    last_maintenance?: SortOrder
    insurance_expiry?: SortOrder
    permit_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    fuel_level?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bus_number?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    status?: SortOrder
    current_location?: SortOrder
    fuel_level?: SortOrder
    last_maintenance?: SortOrder
    insurance_expiry?: SortOrder
    permit_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bus_number?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    status?: SortOrder
    current_location?: SortOrder
    fuel_level?: SortOrder
    last_maintenance?: SortOrder
    insurance_expiry?: SortOrder
    permit_expiry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    capacity?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    fuel_level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusStatus | EnumBusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusStatus[]
    notIn?: $Enums.BusStatus[]
    not?: NestedEnumBusStatusWithAggregatesFilter<$PrismaModel> | $Enums.BusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusStatusFilter<$PrismaModel>
    _max?: NestedEnumBusStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[]
    notIn?: $Enums.PackageStatus[]
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type TripNullableScalarRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type PackageOrderByRelevanceInput = {
    fields: PackageOrderByRelevanceFieldEnum | PackageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    package_number?: SortOrder
    sender_name?: SortOrder
    sender_phone?: SortOrder
    receiver_name?: SortOrder
    receiver_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    booked_at?: SortOrder
    delivered_at?: SortOrder
    trip_id?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
    trip_id?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    package_number?: SortOrder
    sender_name?: SortOrder
    sender_phone?: SortOrder
    receiver_name?: SortOrder
    receiver_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    booked_at?: SortOrder
    delivered_at?: SortOrder
    trip_id?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    package_number?: SortOrder
    sender_name?: SortOrder
    sender_phone?: SortOrder
    receiver_name?: SortOrder
    receiver_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    booked_at?: SortOrder
    delivered_at?: SortOrder
    trip_id?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
    trip_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[]
    notIn?: $Enums.PackageStatus[]
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPOSStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.POSStatus | EnumPOSStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POSStatus[]
    notIn?: $Enums.POSStatus[]
    not?: NestedEnumPOSStatusFilter<$PrismaModel> | $Enums.POSStatus
  }

  export type BusNullableScalarRelationFilter = {
    is?: BusWhereInput | null
    isNot?: BusWhereInput | null
  }

  export type POSMachineOrderByRelevanceInput = {
    fields: POSMachineOrderByRelevanceFieldEnum | POSMachineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type POSMachineCountOrderByAggregateInput = {
    id?: SortOrder
    serial_no?: SortOrder
    assigned?: SortOrder
    assigned_at?: SortOrder
    status?: SortOrder
    bus_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type POSMachineAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
  }

  export type POSMachineMaxOrderByAggregateInput = {
    id?: SortOrder
    serial_no?: SortOrder
    assigned?: SortOrder
    assigned_at?: SortOrder
    status?: SortOrder
    bus_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type POSMachineMinOrderByAggregateInput = {
    id?: SortOrder
    serial_no?: SortOrder
    assigned?: SortOrder
    assigned_at?: SortOrder
    status?: SortOrder
    bus_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type POSMachineSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPOSStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POSStatus | EnumPOSStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POSStatus[]
    notIn?: $Enums.POSStatus[]
    not?: NestedEnumPOSStatusWithAggregatesFilter<$PrismaModel> | $Enums.POSStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOSStatusFilter<$PrismaModel>
    _max?: NestedEnumPOSStatusFilter<$PrismaModel>
  }

  export type DailyReportUnique_bus_dateCompoundUniqueInput = {
    bus_id: number
    report_date: Date | string
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    report_date?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
    created_at?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    report_date?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
    created_at?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    report_date?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
    created_at?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    total_passengers?: SortOrder
    total_revenue?: SortOrder
    total_packages?: SortOrder
    package_revenue?: SortOrder
    fuel_cost?: SortOrder
    maintenance_cost?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelevanceInput = {
    fields: RouteOrderByRelevanceFieldEnum | RouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
    stops?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    distance?: SortOrder
    base_fare?: SortOrder
    per_km_rate?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPassengerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerType | EnumPassengerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerType[]
    notIn?: $Enums.PassengerType[]
    not?: NestedEnumPassengerTypeFilter<$PrismaModel> | $Enums.PassengerType
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type POSMachineNullableScalarRelationFilter = {
    is?: POSMachineWhereInput | null
    isNot?: POSMachineWhereInput | null
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    ticket_number?: SortOrder
    passenger_name?: SortOrder
    passenger_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    passenger_type?: SortOrder
    fare?: SortOrder
    issue_time?: SortOrder
    journey_date?: SortOrder
    status?: SortOrder
    seat_no?: SortOrder
    pos_machine_id?: SortOrder
    payment_mode?: SortOrder
    trip_id?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    fare?: SortOrder
    seat_no?: SortOrder
    pos_machine_id?: SortOrder
    trip_id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    ticket_number?: SortOrder
    passenger_name?: SortOrder
    passenger_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    passenger_type?: SortOrder
    fare?: SortOrder
    issue_time?: SortOrder
    journey_date?: SortOrder
    status?: SortOrder
    seat_no?: SortOrder
    pos_machine_id?: SortOrder
    payment_mode?: SortOrder
    trip_id?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    ticket_number?: SortOrder
    passenger_name?: SortOrder
    passenger_phone?: SortOrder
    from_stop?: SortOrder
    to_stop?: SortOrder
    passenger_type?: SortOrder
    fare?: SortOrder
    issue_time?: SortOrder
    journey_date?: SortOrder
    status?: SortOrder
    seat_no?: SortOrder
    pos_machine_id?: SortOrder
    payment_mode?: SortOrder
    trip_id?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    fare?: SortOrder
    seat_no?: SortOrder
    pos_machine_id?: SortOrder
    trip_id?: SortOrder
  }

  export type EnumPassengerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerType | EnumPassengerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerType[]
    notIn?: $Enums.PassengerType[]
    not?: NestedEnumPassengerTypeWithAggregatesFilter<$PrismaModel> | $Enums.PassengerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassengerTypeFilter<$PrismaModel>
    _max?: NestedEnumPassengerTypeFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    route_id?: SortOrder
    driver_id?: SortOrder
    conductor_id?: SortOrder
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserExtraNullableScalarRelationFilter = {
    is?: UserExtraWhereInput | null
    isNot?: UserExtraWhereInput | null
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company_name?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company_name?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company_name?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserExtraOrderByRelevanceInput = {
    fields: UserExtraOrderByRelevanceFieldEnum | UserExtraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserExtraCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserExtraAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience_years?: SortOrder
  }

  export type UserExtraMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserExtraMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserExtraSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience_years?: SortOrder
  }

  export type EnumOTPTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPType | EnumOTPTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OTPType[]
    notIn?: $Enums.OTPType[]
    not?: NestedEnumOTPTypeFilter<$PrismaModel> | $Enums.OTPType
  }

  export type OTPOrderByRelevanceInput = {
    fields: OTPOrderByRelevanceFieldEnum | OTPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    otp_type?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type OTPAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    otp_type?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otp_code?: SortOrder
    otp_type?: SortOrder
    expires_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type OTPSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumOTPTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPType | EnumOTPTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OTPType[]
    notIn?: $Enums.OTPType[]
    not?: NestedEnumOTPTypeWithAggregatesFilter<$PrismaModel> | $Enums.OTPType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPTypeFilter<$PrismaModel>
    _max?: NestedEnumOTPTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutBusesInput = {
    create?: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutBusesInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    connect?: RouteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusesDrivenInput = {
    create?: XOR<UserCreateWithoutBusesDrivenInput, UserUncheckedCreateWithoutBusesDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesDrivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusesConductedInput = {
    create?: XOR<UserCreateWithoutBusesConductedInput, UserUncheckedCreateWithoutBusesConductedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesConductedInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutBusInput = {
    create?: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput> | PackageCreateWithoutBusInput[] | PackageUncheckedCreateWithoutBusInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutBusInput | PackageCreateOrConnectWithoutBusInput[]
    createMany?: PackageCreateManyBusInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type DailyReportCreateNestedManyWithoutBusInput = {
    create?: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput> | DailyReportCreateWithoutBusInput[] | DailyReportUncheckedCreateWithoutBusInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutBusInput | DailyReportCreateOrConnectWithoutBusInput[]
    createMany?: DailyReportCreateManyBusInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type POSMachineCreateNestedManyWithoutBusInput = {
    create?: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput> | POSMachineCreateWithoutBusInput[] | POSMachineUncheckedCreateWithoutBusInput[]
    connectOrCreate?: POSMachineCreateOrConnectWithoutBusInput | POSMachineCreateOrConnectWithoutBusInput[]
    createMany?: POSMachineCreateManyBusInputEnvelope
    connect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutBusInput = {
    create?: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput> | TripCreateWithoutBusInput[] | TripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TripCreateOrConnectWithoutBusInput | TripCreateOrConnectWithoutBusInput[]
    createMany?: TripCreateManyBusInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput> | PackageCreateWithoutBusInput[] | PackageUncheckedCreateWithoutBusInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutBusInput | PackageCreateOrConnectWithoutBusInput[]
    createMany?: PackageCreateManyBusInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput> | DailyReportCreateWithoutBusInput[] | DailyReportUncheckedCreateWithoutBusInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutBusInput | DailyReportCreateOrConnectWithoutBusInput[]
    createMany?: DailyReportCreateManyBusInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type POSMachineUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput> | POSMachineCreateWithoutBusInput[] | POSMachineUncheckedCreateWithoutBusInput[]
    connectOrCreate?: POSMachineCreateOrConnectWithoutBusInput | POSMachineCreateOrConnectWithoutBusInput[]
    createMany?: POSMachineCreateManyBusInputEnvelope
    connect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput> | TripCreateWithoutBusInput[] | TripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TripCreateOrConnectWithoutBusInput | TripCreateOrConnectWithoutBusInput[]
    createMany?: TripCreateManyBusInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBusStatusFieldUpdateOperationsInput = {
    set?: $Enums.BusStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesInput
    upsert?: UserUpsertWithoutBusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusesInput, UserUpdateWithoutBusesInput>, UserUncheckedUpdateWithoutBusesInput>
  }

  export type RouteUpdateOneWithoutBusesNestedInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    upsert?: RouteUpsertWithoutBusesInput
    disconnect?: RouteWhereInput | boolean
    delete?: RouteWhereInput | boolean
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutBusesInput, RouteUpdateWithoutBusesInput>, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type UserUpdateOneWithoutBusesDrivenNestedInput = {
    create?: XOR<UserCreateWithoutBusesDrivenInput, UserUncheckedCreateWithoutBusesDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesDrivenInput
    upsert?: UserUpsertWithoutBusesDrivenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusesDrivenInput, UserUpdateWithoutBusesDrivenInput>, UserUncheckedUpdateWithoutBusesDrivenInput>
  }

  export type UserUpdateOneWithoutBusesConductedNestedInput = {
    create?: XOR<UserCreateWithoutBusesConductedInput, UserUncheckedCreateWithoutBusesConductedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesConductedInput
    upsert?: UserUpsertWithoutBusesConductedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusesConductedInput, UserUpdateWithoutBusesConductedInput>, UserUncheckedUpdateWithoutBusesConductedInput>
  }

  export type TicketUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutBusNestedInput = {
    create?: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput> | PackageCreateWithoutBusInput[] | PackageUncheckedCreateWithoutBusInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutBusInput | PackageCreateOrConnectWithoutBusInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutBusInput | PackageUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: PackageCreateManyBusInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutBusInput | PackageUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutBusInput | PackageUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type DailyReportUpdateManyWithoutBusNestedInput = {
    create?: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput> | DailyReportCreateWithoutBusInput[] | DailyReportUncheckedCreateWithoutBusInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutBusInput | DailyReportCreateOrConnectWithoutBusInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutBusInput | DailyReportUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: DailyReportCreateManyBusInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutBusInput | DailyReportUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutBusInput | DailyReportUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type POSMachineUpdateManyWithoutBusNestedInput = {
    create?: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput> | POSMachineCreateWithoutBusInput[] | POSMachineUncheckedCreateWithoutBusInput[]
    connectOrCreate?: POSMachineCreateOrConnectWithoutBusInput | POSMachineCreateOrConnectWithoutBusInput[]
    upsert?: POSMachineUpsertWithWhereUniqueWithoutBusInput | POSMachineUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: POSMachineCreateManyBusInputEnvelope
    set?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    disconnect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    delete?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    connect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    update?: POSMachineUpdateWithWhereUniqueWithoutBusInput | POSMachineUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: POSMachineUpdateManyWithWhereWithoutBusInput | POSMachineUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: POSMachineScalarWhereInput | POSMachineScalarWhereInput[]
  }

  export type TripUpdateManyWithoutBusNestedInput = {
    create?: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput> | TripCreateWithoutBusInput[] | TripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TripCreateOrConnectWithoutBusInput | TripCreateOrConnectWithoutBusInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutBusInput | TripUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TripCreateManyBusInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutBusInput | TripUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TripUpdateManyWithWhereWithoutBusInput | TripUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput> | PackageCreateWithoutBusInput[] | PackageUncheckedCreateWithoutBusInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutBusInput | PackageCreateOrConnectWithoutBusInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutBusInput | PackageUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: PackageCreateManyBusInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutBusInput | PackageUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutBusInput | PackageUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput> | DailyReportCreateWithoutBusInput[] | DailyReportUncheckedCreateWithoutBusInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutBusInput | DailyReportCreateOrConnectWithoutBusInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutBusInput | DailyReportUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: DailyReportCreateManyBusInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutBusInput | DailyReportUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutBusInput | DailyReportUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type POSMachineUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput> | POSMachineCreateWithoutBusInput[] | POSMachineUncheckedCreateWithoutBusInput[]
    connectOrCreate?: POSMachineCreateOrConnectWithoutBusInput | POSMachineCreateOrConnectWithoutBusInput[]
    upsert?: POSMachineUpsertWithWhereUniqueWithoutBusInput | POSMachineUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: POSMachineCreateManyBusInputEnvelope
    set?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    disconnect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    delete?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    connect?: POSMachineWhereUniqueInput | POSMachineWhereUniqueInput[]
    update?: POSMachineUpdateWithWhereUniqueWithoutBusInput | POSMachineUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: POSMachineUpdateManyWithWhereWithoutBusInput | POSMachineUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: POSMachineScalarWhereInput | POSMachineScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput> | TripCreateWithoutBusInput[] | TripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TripCreateOrConnectWithoutBusInput | TripCreateOrConnectWithoutBusInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutBusInput | TripUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TripCreateManyBusInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutBusInput | TripUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TripUpdateManyWithWhereWithoutBusInput | TripUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutPackagesInput = {
    create?: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: BusCreateOrConnectWithoutPackagesInput
    connect?: BusWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutPackagesInput = {
    create?: XOR<TripCreateWithoutPackagesInput, TripUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPackagesInput
    connect?: TripWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPackageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackageStatus
  }

  export type BusUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: BusCreateOrConnectWithoutPackagesInput
    upsert?: BusUpsertWithoutPackagesInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutPackagesInput, BusUpdateWithoutPackagesInput>, BusUncheckedUpdateWithoutPackagesInput>
  }

  export type TripUpdateOneWithoutPackagesNestedInput = {
    create?: XOR<TripCreateWithoutPackagesInput, TripUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPackagesInput
    upsert?: TripUpsertWithoutPackagesInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPackagesInput, TripUpdateWithoutPackagesInput>, TripUncheckedUpdateWithoutPackagesInput>
  }

  export type BusCreateNestedOneWithoutPosMachinesInput = {
    create?: XOR<BusCreateWithoutPosMachinesInput, BusUncheckedCreateWithoutPosMachinesInput>
    connectOrCreate?: BusCreateOrConnectWithoutPosMachinesInput
    connect?: BusWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutPosMachineInput = {
    create?: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput> | TicketCreateWithoutPosMachineInput[] | TicketUncheckedCreateWithoutPosMachineInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPosMachineInput | TicketCreateOrConnectWithoutPosMachineInput[]
    createMany?: TicketCreateManyPosMachineInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPosMachineInput = {
    create?: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput> | TicketCreateWithoutPosMachineInput[] | TicketUncheckedCreateWithoutPosMachineInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPosMachineInput | TicketCreateOrConnectWithoutPosMachineInput[]
    createMany?: TicketCreateManyPosMachineInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPOSStatusFieldUpdateOperationsInput = {
    set?: $Enums.POSStatus
  }

  export type BusUpdateOneWithoutPosMachinesNestedInput = {
    create?: XOR<BusCreateWithoutPosMachinesInput, BusUncheckedCreateWithoutPosMachinesInput>
    connectOrCreate?: BusCreateOrConnectWithoutPosMachinesInput
    upsert?: BusUpsertWithoutPosMachinesInput
    disconnect?: BusWhereInput | boolean
    delete?: BusWhereInput | boolean
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutPosMachinesInput, BusUpdateWithoutPosMachinesInput>, BusUncheckedUpdateWithoutPosMachinesInput>
  }

  export type TicketUpdateManyWithoutPosMachineNestedInput = {
    create?: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput> | TicketCreateWithoutPosMachineInput[] | TicketUncheckedCreateWithoutPosMachineInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPosMachineInput | TicketCreateOrConnectWithoutPosMachineInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPosMachineInput | TicketUpsertWithWhereUniqueWithoutPosMachineInput[]
    createMany?: TicketCreateManyPosMachineInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPosMachineInput | TicketUpdateWithWhereUniqueWithoutPosMachineInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPosMachineInput | TicketUpdateManyWithWhereWithoutPosMachineInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPosMachineNestedInput = {
    create?: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput> | TicketCreateWithoutPosMachineInput[] | TicketUncheckedCreateWithoutPosMachineInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPosMachineInput | TicketCreateOrConnectWithoutPosMachineInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPosMachineInput | TicketUpsertWithWhereUniqueWithoutPosMachineInput[]
    createMany?: TicketCreateManyPosMachineInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPosMachineInput | TicketUpdateWithWhereUniqueWithoutPosMachineInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPosMachineInput | TicketUpdateManyWithWhereWithoutPosMachineInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<BusCreateWithoutDailyReportsInput, BusUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: BusCreateOrConnectWithoutDailyReportsInput
    connect?: BusWhereUniqueInput
  }

  export type BusUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<BusCreateWithoutDailyReportsInput, BusUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: BusCreateOrConnectWithoutDailyReportsInput
    upsert?: BusUpsertWithoutDailyReportsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutDailyReportsInput, BusUpdateWithoutDailyReportsInput>, BusUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserCreateNestedOneWithoutRoutesInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    connect?: UserWhereUniqueInput
  }

  export type BusCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutRouteInput = {
    create?: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput> | TripCreateWithoutRouteInput[] | TripUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TripCreateOrConnectWithoutRouteInput | TripCreateOrConnectWithoutRouteInput[]
    createMany?: TripCreateManyRouteInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput> | TripCreateWithoutRouteInput[] | TripUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TripCreateOrConnectWithoutRouteInput | TripCreateOrConnectWithoutRouteInput[]
    createMany?: TripCreateManyRouteInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    upsert?: UserUpsertWithoutRoutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutesInput, UserUpdateWithoutRoutesInput>, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type BusUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TripUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput> | TripCreateWithoutRouteInput[] | TripUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TripCreateOrConnectWithoutRouteInput | TripCreateOrConnectWithoutRouteInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutRouteInput | TripUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TripCreateManyRouteInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutRouteInput | TripUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TripUpdateManyWithWhereWithoutRouteInput | TripUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput> | TripCreateWithoutRouteInput[] | TripUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TripCreateOrConnectWithoutRouteInput | TripCreateOrConnectWithoutRouteInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutRouteInput | TripUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TripCreateManyRouteInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutRouteInput | TripUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TripUpdateManyWithWhereWithoutRouteInput | TripUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    connect?: BusWhereUniqueInput
  }

  export type POSMachineCreateNestedOneWithoutTicketsInput = {
    create?: XOR<POSMachineCreateWithoutTicketsInput, POSMachineUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: POSMachineCreateOrConnectWithoutTicketsInput
    connect?: POSMachineWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TripCreateWithoutTicketsInput, TripUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TripCreateOrConnectWithoutTicketsInput
    connect?: TripWhereUniqueInput
  }

  export type EnumPassengerTypeFieldUpdateOperationsInput = {
    set?: $Enums.PassengerType
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EnumPaymentModeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMode
  }

  export type BusUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    upsert?: BusUpsertWithoutTicketsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTicketsInput, BusUpdateWithoutTicketsInput>, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type POSMachineUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<POSMachineCreateWithoutTicketsInput, POSMachineUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: POSMachineCreateOrConnectWithoutTicketsInput
    upsert?: POSMachineUpsertWithoutTicketsInput
    disconnect?: POSMachineWhereInput | boolean
    delete?: POSMachineWhereInput | boolean
    connect?: POSMachineWhereUniqueInput
    update?: XOR<XOR<POSMachineUpdateToOneWithWhereWithoutTicketsInput, POSMachineUpdateWithoutTicketsInput>, POSMachineUncheckedUpdateWithoutTicketsInput>
  }

  export type TripUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<TripCreateWithoutTicketsInput, TripUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TripCreateOrConnectWithoutTicketsInput
    upsert?: TripUpsertWithoutTicketsInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTicketsInput, TripUpdateWithoutTicketsInput>, TripUncheckedUpdateWithoutTicketsInput>
  }

  export type BusCreateNestedOneWithoutTripsInput = {
    create?: XOR<BusCreateWithoutTripsInput, BusUncheckedCreateWithoutTripsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTripsInput
    connect?: BusWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutTripsInput = {
    create?: XOR<RouteCreateWithoutTripsInput, RouteUncheckedCreateWithoutTripsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTripsInput
    connect?: RouteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripsDrivenInput = {
    create?: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsDrivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripsConductedInput = {
    create?: XOR<UserCreateWithoutTripsConductedInput, UserUncheckedCreateWithoutTripsConductedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsConductedInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutTripInput = {
    create?: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput> | TicketCreateWithoutTripInput[] | TicketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTripInput | TicketCreateOrConnectWithoutTripInput[]
    createMany?: TicketCreateManyTripInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutTripInput = {
    create?: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput> | PackageCreateWithoutTripInput[] | PackageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutTripInput | PackageCreateOrConnectWithoutTripInput[]
    createMany?: PackageCreateManyTripInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput> | TicketCreateWithoutTripInput[] | TicketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTripInput | TicketCreateOrConnectWithoutTripInput[]
    createMany?: TicketCreateManyTripInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput> | PackageCreateWithoutTripInput[] | PackageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutTripInput | PackageCreateOrConnectWithoutTripInput[]
    createMany?: PackageCreateManyTripInputEnvelope
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type BusUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<BusCreateWithoutTripsInput, BusUncheckedCreateWithoutTripsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTripsInput
    upsert?: BusUpsertWithoutTripsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTripsInput, BusUpdateWithoutTripsInput>, BusUncheckedUpdateWithoutTripsInput>
  }

  export type RouteUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<RouteCreateWithoutTripsInput, RouteUncheckedCreateWithoutTripsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTripsInput
    upsert?: RouteUpsertWithoutTripsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutTripsInput, RouteUpdateWithoutTripsInput>, RouteUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateOneWithoutTripsDrivenNestedInput = {
    create?: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsDrivenInput
    upsert?: UserUpsertWithoutTripsDrivenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsDrivenInput, UserUpdateWithoutTripsDrivenInput>, UserUncheckedUpdateWithoutTripsDrivenInput>
  }

  export type UserUpdateOneWithoutTripsConductedNestedInput = {
    create?: XOR<UserCreateWithoutTripsConductedInput, UserUncheckedCreateWithoutTripsConductedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsConductedInput
    upsert?: UserUpsertWithoutTripsConductedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsConductedInput, UserUpdateWithoutTripsConductedInput>, UserUncheckedUpdateWithoutTripsConductedInput>
  }

  export type TicketUpdateManyWithoutTripNestedInput = {
    create?: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput> | TicketCreateWithoutTripInput[] | TicketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTripInput | TicketCreateOrConnectWithoutTripInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTripInput | TicketUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TicketCreateManyTripInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTripInput | TicketUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTripInput | TicketUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutTripNestedInput = {
    create?: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput> | PackageCreateWithoutTripInput[] | PackageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutTripInput | PackageCreateOrConnectWithoutTripInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutTripInput | PackageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PackageCreateManyTripInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutTripInput | PackageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutTripInput | PackageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput> | TicketCreateWithoutTripInput[] | TicketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTripInput | TicketCreateOrConnectWithoutTripInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTripInput | TicketUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TicketCreateManyTripInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTripInput | TicketUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTripInput | TicketUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput> | PackageCreateWithoutTripInput[] | PackageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutTripInput | PackageCreateOrConnectWithoutTripInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutTripInput | PackageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PackageCreateManyTripInputEnvelope
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutTripInput | PackageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutTripInput | PackageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type UserExtraCreateNestedOneWithoutUserInput = {
    create?: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserExtraCreateOrConnectWithoutUserInput
    connect?: UserExtraWhereUniqueInput
  }

  export type BusCreateNestedManyWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutConductorInput = {
    create?: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput> | TripCreateWithoutConductorInput[] | TripUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutConductorInput | TripCreateOrConnectWithoutConductorInput[]
    createMany?: TripCreateManyConductorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type BusCreateNestedManyWithoutUserInput = {
    create?: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput> | BusCreateWithoutUserInput[] | BusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusCreateOrConnectWithoutUserInput | BusCreateOrConnectWithoutUserInput[]
    createMany?: BusCreateManyUserInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type OTPCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type UserExtraUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserExtraCreateOrConnectWithoutUserInput
    connect?: UserExtraWhereUniqueInput
  }

  export type BusUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput> | TripCreateWithoutConductorInput[] | TripUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutConductorInput | TripCreateOrConnectWithoutConductorInput[]
    createMany?: TripCreateManyConductorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput> | BusCreateWithoutUserInput[] | BusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusCreateOrConnectWithoutUserInput | BusCreateOrConnectWithoutUserInput[]
    createMany?: BusCreateManyUserInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type OTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserExtraUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserExtraCreateOrConnectWithoutUserInput
    upsert?: UserExtraUpsertWithoutUserInput
    disconnect?: UserExtraWhereInput | boolean
    delete?: UserExtraWhereInput | boolean
    connect?: UserExtraWhereUniqueInput
    update?: XOR<XOR<UserExtraUpdateToOneWithWhereWithoutUserInput, UserExtraUpdateWithoutUserInput>, UserExtraUncheckedUpdateWithoutUserInput>
  }

  export type BusUpdateManyWithoutDriverNestedInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutDriverInput | BusUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutDriverInput | BusUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: BusUpdateManyWithWhereWithoutDriverInput | BusUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusUpdateManyWithoutConductorNestedInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutConductorInput | BusUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutConductorInput | BusUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: BusUpdateManyWithWhereWithoutConductorInput | BusUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput> | TripCreateWithoutConductorInput[] | TripUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutConductorInput | TripCreateOrConnectWithoutConductorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutConductorInput | TripUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TripCreateManyConductorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutConductorInput | TripUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutConductorInput | TripUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type BusUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput> | BusCreateWithoutUserInput[] | BusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusCreateOrConnectWithoutUserInput | BusCreateOrConnectWithoutUserInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutUserInput | BusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusCreateManyUserInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutUserInput | BusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusUpdateManyWithWhereWithoutUserInput | BusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type OTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type UserExtraUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserExtraCreateOrConnectWithoutUserInput
    upsert?: UserExtraUpsertWithoutUserInput
    disconnect?: UserExtraWhereInput | boolean
    delete?: UserExtraWhereInput | boolean
    connect?: UserExtraWhereUniqueInput
    update?: XOR<XOR<UserExtraUpdateToOneWithWhereWithoutUserInput, UserExtraUpdateWithoutUserInput>, UserExtraUncheckedUpdateWithoutUserInput>
  }

  export type BusUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutDriverInput | BusUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutDriverInput | BusUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: BusUpdateManyWithWhereWithoutDriverInput | BusUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutConductorInput | BusUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutConductorInput | BusUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: BusUpdateManyWithWhereWithoutConductorInput | BusUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput> | TripCreateWithoutConductorInput[] | TripUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutConductorInput | TripCreateOrConnectWithoutConductorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutConductorInput | TripUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TripCreateManyConductorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutConductorInput | TripUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutConductorInput | TripUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput> | BusCreateWithoutUserInput[] | BusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusCreateOrConnectWithoutUserInput | BusCreateOrConnectWithoutUserInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutUserInput | BusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusCreateManyUserInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutUserInput | BusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusUpdateManyWithWhereWithoutUserInput | BusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type OTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserExtraInput = {
    create?: XOR<UserCreateWithoutUserExtraInput, UserUncheckedCreateWithoutUserExtraInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExtraInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserExtraNestedInput = {
    create?: XOR<UserCreateWithoutUserExtraInput, UserUncheckedCreateWithoutUserExtraInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExtraInput
    upsert?: UserUpsertWithoutUserExtraInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserExtraInput, UserUpdateWithoutUserExtraInput>, UserUncheckedUpdateWithoutUserExtraInput>
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOTPTypeFieldUpdateOperationsInput = {
    set?: $Enums.OTPType
  }

  export type UserUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BusStatus | EnumBusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusStatus[]
    notIn?: $Enums.BusStatus[]
    not?: NestedEnumBusStatusFilter<$PrismaModel> | $Enums.BusStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusStatus | EnumBusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BusStatus[]
    notIn?: $Enums.BusStatus[]
    not?: NestedEnumBusStatusWithAggregatesFilter<$PrismaModel> | $Enums.BusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusStatusFilter<$PrismaModel>
    _max?: NestedEnumBusStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPackageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[]
    notIn?: $Enums.PackageStatus[]
    not?: NestedEnumPackageStatusFilter<$PrismaModel> | $Enums.PackageStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageStatus | EnumPackageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageStatus[]
    notIn?: $Enums.PackageStatus[]
    not?: NestedEnumPackageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPOSStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.POSStatus | EnumPOSStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POSStatus[]
    notIn?: $Enums.POSStatus[]
    not?: NestedEnumPOSStatusFilter<$PrismaModel> | $Enums.POSStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPOSStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POSStatus | EnumPOSStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POSStatus[]
    notIn?: $Enums.POSStatus[]
    not?: NestedEnumPOSStatusWithAggregatesFilter<$PrismaModel> | $Enums.POSStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOSStatusFilter<$PrismaModel>
    _max?: NestedEnumPOSStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPassengerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerType | EnumPassengerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerType[]
    notIn?: $Enums.PassengerType[]
    not?: NestedEnumPassengerTypeFilter<$PrismaModel> | $Enums.PassengerType
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumPaymentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeFilter<$PrismaModel> | $Enums.PaymentMode
  }

  export type NestedEnumPassengerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerType | EnumPassengerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerType[]
    notIn?: $Enums.PassengerType[]
    not?: NestedEnumPassengerTypeWithAggregatesFilter<$PrismaModel> | $Enums.PassengerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassengerTypeFilter<$PrismaModel>
    _max?: NestedEnumPassengerTypeFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMode | EnumPaymentModeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMode[]
    notIn?: $Enums.PaymentMode[]
    not?: NestedEnumPaymentModeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModeFilter<$PrismaModel>
    _max?: NestedEnumPaymentModeFilter<$PrismaModel>
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumOTPTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPType | EnumOTPTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OTPType[]
    notIn?: $Enums.OTPType[]
    not?: NestedEnumOTPTypeFilter<$PrismaModel> | $Enums.OTPType
  }

  export type NestedEnumOTPTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OTPType | EnumOTPTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OTPType[]
    notIn?: $Enums.OTPType[]
    not?: NestedEnumOTPTypeWithAggregatesFilter<$PrismaModel> | $Enums.OTPType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOTPTypeFilter<$PrismaModel>
    _max?: NestedEnumOTPTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutBusesInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusesInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
  }

  export type RouteCreateWithoutBusesInput = {
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    trips?: TripCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutBusesInput = {
    id?: number
    user_id: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutBusesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
  }

  export type UserCreateWithoutBusesDrivenInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusesDrivenInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusesDrivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusesDrivenInput, UserUncheckedCreateWithoutBusesDrivenInput>
  }

  export type UserCreateWithoutBusesConductedInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusesConductedInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusesConductedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusesConductedInput, UserUncheckedCreateWithoutBusesConductedInput>
  }

  export type TicketCreateWithoutBusInput = {
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    posMachine?: POSMachineCreateNestedOneWithoutTicketsInput
    trip?: TripCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutBusInput = {
    id?: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type TicketCreateOrConnectWithoutBusInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketCreateManyBusInputEnvelope = {
    data: TicketCreateManyBusInput | TicketCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutBusInput = {
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    trip?: TripCreateNestedOneWithoutPackagesInput
  }

  export type PackageUncheckedCreateWithoutBusInput = {
    id?: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    trip_id?: number | null
  }

  export type PackageCreateOrConnectWithoutBusInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput>
  }

  export type PackageCreateManyBusInputEnvelope = {
    data: PackageCreateManyBusInput | PackageCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportCreateWithoutBusInput = {
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type DailyReportUncheckedCreateWithoutBusInput = {
    id?: number
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type DailyReportCreateOrConnectWithoutBusInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput>
  }

  export type DailyReportCreateManyBusInputEnvelope = {
    data: DailyReportCreateManyBusInput | DailyReportCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type POSMachineCreateWithoutBusInput = {
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketCreateNestedManyWithoutPosMachineInput
  }

  export type POSMachineUncheckedCreateWithoutBusInput = {
    id?: number
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutPosMachineInput
  }

  export type POSMachineCreateOrConnectWithoutBusInput = {
    where: POSMachineWhereUniqueInput
    create: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput>
  }

  export type POSMachineCreateManyBusInputEnvelope = {
    data: POSMachineCreateManyBusInput | POSMachineCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutBusInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    route: RouteCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    tickets?: TicketCreateNestedManyWithoutTripInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBusInput = {
    id?: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBusInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput>
  }

  export type TripCreateManyBusInputEnvelope = {
    data: TripCreateManyBusInput | TripCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusesInput = {
    update: XOR<UserUpdateWithoutBusesInput, UserUncheckedUpdateWithoutBusesInput>
    create: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusesInput, UserUncheckedUpdateWithoutBusesInput>
  }

  export type UserUpdateWithoutBusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RouteUpsertWithoutBusesInput = {
    update: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutBusesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type RouteUpdateWithoutBusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    trips?: TripUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type UserUpsertWithoutBusesDrivenInput = {
    update: XOR<UserUpdateWithoutBusesDrivenInput, UserUncheckedUpdateWithoutBusesDrivenInput>
    create: XOR<UserCreateWithoutBusesDrivenInput, UserUncheckedCreateWithoutBusesDrivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusesDrivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusesDrivenInput, UserUncheckedUpdateWithoutBusesDrivenInput>
  }

  export type UserUpdateWithoutBusesDrivenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusesDrivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBusesConductedInput = {
    update: XOR<UserUpdateWithoutBusesConductedInput, UserUncheckedUpdateWithoutBusesConductedInput>
    create: XOR<UserCreateWithoutBusesConductedInput, UserUncheckedCreateWithoutBusesConductedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusesConductedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusesConductedInput, UserUncheckedUpdateWithoutBusesConductedInput>
  }

  export type UserUpdateWithoutBusesConductedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusesConductedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
  }

  export type TicketUpdateManyWithWhereWithoutBusInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBusInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    bus_id?: IntFilter<"Ticket"> | number
    ticket_number?: StringFilter<"Ticket"> | string
    passenger_name?: StringNullableFilter<"Ticket"> | string | null
    passenger_phone?: StringNullableFilter<"Ticket"> | string | null
    from_stop?: StringFilter<"Ticket"> | string
    to_stop?: StringFilter<"Ticket"> | string
    passenger_type?: EnumPassengerTypeFilter<"Ticket"> | $Enums.PassengerType
    fare?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFilter<"Ticket"> | Date | string
    journey_date?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    seat_no?: IntNullableFilter<"Ticket"> | number | null
    pos_machine_id?: IntNullableFilter<"Ticket"> | number | null
    payment_mode?: EnumPaymentModeFilter<"Ticket"> | $Enums.PaymentMode
    trip_id?: IntNullableFilter<"Ticket"> | number | null
  }

  export type PackageUpsertWithWhereUniqueWithoutBusInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutBusInput, PackageUncheckedUpdateWithoutBusInput>
    create: XOR<PackageCreateWithoutBusInput, PackageUncheckedCreateWithoutBusInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutBusInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutBusInput, PackageUncheckedUpdateWithoutBusInput>
  }

  export type PackageUpdateManyWithWhereWithoutBusInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutBusInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: IntFilter<"Package"> | number
    bus_id?: IntFilter<"Package"> | number
    package_number?: StringFilter<"Package"> | string
    sender_name?: StringFilter<"Package"> | string
    sender_phone?: StringFilter<"Package"> | string
    receiver_name?: StringFilter<"Package"> | string
    receiver_phone?: StringFilter<"Package"> | string
    from_stop?: StringFilter<"Package"> | string
    to_stop?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    weight?: DecimalNullableFilter<"Package"> | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFilter<"Package"> | $Enums.PackageStatus
    booked_at?: DateTimeFilter<"Package"> | Date | string
    delivered_at?: DateTimeNullableFilter<"Package"> | Date | string | null
    trip_id?: IntNullableFilter<"Package"> | number | null
  }

  export type DailyReportUpsertWithWhereUniqueWithoutBusInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutBusInput, DailyReportUncheckedUpdateWithoutBusInput>
    create: XOR<DailyReportCreateWithoutBusInput, DailyReportUncheckedCreateWithoutBusInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutBusInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutBusInput, DailyReportUncheckedUpdateWithoutBusInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutBusInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutBusInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: IntFilter<"DailyReport"> | number
    bus_id?: IntFilter<"DailyReport"> | number
    report_date?: DateTimeFilter<"DailyReport"> | Date | string
    total_passengers?: IntFilter<"DailyReport"> | number
    total_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    total_packages?: IntFilter<"DailyReport"> | number
    package_revenue?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFilter<"DailyReport"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"DailyReport"> | Date | string
  }

  export type POSMachineUpsertWithWhereUniqueWithoutBusInput = {
    where: POSMachineWhereUniqueInput
    update: XOR<POSMachineUpdateWithoutBusInput, POSMachineUncheckedUpdateWithoutBusInput>
    create: XOR<POSMachineCreateWithoutBusInput, POSMachineUncheckedCreateWithoutBusInput>
  }

  export type POSMachineUpdateWithWhereUniqueWithoutBusInput = {
    where: POSMachineWhereUniqueInput
    data: XOR<POSMachineUpdateWithoutBusInput, POSMachineUncheckedUpdateWithoutBusInput>
  }

  export type POSMachineUpdateManyWithWhereWithoutBusInput = {
    where: POSMachineScalarWhereInput
    data: XOR<POSMachineUpdateManyMutationInput, POSMachineUncheckedUpdateManyWithoutBusInput>
  }

  export type POSMachineScalarWhereInput = {
    AND?: POSMachineScalarWhereInput | POSMachineScalarWhereInput[]
    OR?: POSMachineScalarWhereInput[]
    NOT?: POSMachineScalarWhereInput | POSMachineScalarWhereInput[]
    id?: IntFilter<"POSMachine"> | number
    serial_no?: StringFilter<"POSMachine"> | string
    assigned?: BoolFilter<"POSMachine"> | boolean
    assigned_at?: DateTimeNullableFilter<"POSMachine"> | Date | string | null
    status?: EnumPOSStatusFilter<"POSMachine"> | $Enums.POSStatus
    bus_id?: IntNullableFilter<"POSMachine"> | number | null
    created_at?: DateTimeFilter<"POSMachine"> | Date | string
    updated_at?: DateTimeFilter<"POSMachine"> | Date | string
  }

  export type TripUpsertWithWhereUniqueWithoutBusInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutBusInput, TripUncheckedUpdateWithoutBusInput>
    create: XOR<TripCreateWithoutBusInput, TripUncheckedCreateWithoutBusInput>
  }

  export type TripUpdateWithWhereUniqueWithoutBusInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutBusInput, TripUncheckedUpdateWithoutBusInput>
  }

  export type TripUpdateManyWithWhereWithoutBusInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutBusInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    bus_id?: IntFilter<"Trip"> | number
    route_id?: IntFilter<"Trip"> | number
    start_time?: DateTimeFilter<"Trip"> | Date | string
    end_time?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    driver_id?: IntNullableFilter<"Trip"> | number | null
    conductor_id?: IntNullableFilter<"Trip"> | number | null
    created_at?: DateTimeFilter<"Trip"> | Date | string
    updated_at?: DateTimeFilter<"Trip"> | Date | string
  }

  export type BusCreateWithoutPackagesInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutPackagesInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutPackagesInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
  }

  export type TripCreateWithoutPackagesInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    route: RouteCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    tickets?: TicketCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPackagesInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPackagesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPackagesInput, TripUncheckedCreateWithoutPackagesInput>
  }

  export type BusUpsertWithoutPackagesInput = {
    update: XOR<BusUpdateWithoutPackagesInput, BusUncheckedUpdateWithoutPackagesInput>
    create: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutPackagesInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutPackagesInput, BusUncheckedUpdateWithoutPackagesInput>
  }

  export type BusUpdateWithoutPackagesInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type TripUpsertWithoutPackagesInput = {
    update: XOR<TripUpdateWithoutPackagesInput, TripUncheckedUpdateWithoutPackagesInput>
    create: XOR<TripCreateWithoutPackagesInput, TripUncheckedCreateWithoutPackagesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPackagesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPackagesInput, TripUncheckedUpdateWithoutPackagesInput>
  }

  export type TripUpdateWithoutPackagesInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type BusCreateWithoutPosMachinesInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutPosMachinesInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutPosMachinesInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutPosMachinesInput, BusUncheckedCreateWithoutPosMachinesInput>
  }

  export type TicketCreateWithoutPosMachineInput = {
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    bus: BusCreateNestedOneWithoutTicketsInput
    trip?: TripCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPosMachineInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type TicketCreateOrConnectWithoutPosMachineInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput>
  }

  export type TicketCreateManyPosMachineInputEnvelope = {
    data: TicketCreateManyPosMachineInput | TicketCreateManyPosMachineInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithoutPosMachinesInput = {
    update: XOR<BusUpdateWithoutPosMachinesInput, BusUncheckedUpdateWithoutPosMachinesInput>
    create: XOR<BusCreateWithoutPosMachinesInput, BusUncheckedCreateWithoutPosMachinesInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutPosMachinesInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutPosMachinesInput, BusUncheckedUpdateWithoutPosMachinesInput>
  }

  export type BusUpdateWithoutPosMachinesInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutPosMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutPosMachineInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPosMachineInput, TicketUncheckedUpdateWithoutPosMachineInput>
    create: XOR<TicketCreateWithoutPosMachineInput, TicketUncheckedCreateWithoutPosMachineInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPosMachineInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPosMachineInput, TicketUncheckedUpdateWithoutPosMachineInput>
  }

  export type TicketUpdateManyWithWhereWithoutPosMachineInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPosMachineInput>
  }

  export type BusCreateWithoutDailyReportsInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutDailyReportsInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutDailyReportsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDailyReportsInput, BusUncheckedCreateWithoutDailyReportsInput>
  }

  export type BusUpsertWithoutDailyReportsInput = {
    update: XOR<BusUpdateWithoutDailyReportsInput, BusUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<BusCreateWithoutDailyReportsInput, BusUncheckedCreateWithoutDailyReportsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutDailyReportsInput, BusUncheckedUpdateWithoutDailyReportsInput>
  }

  export type BusUpdateWithoutDailyReportsInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutDailyReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type UserCreateWithoutRoutesInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutesInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
  }

  export type BusCreateWithoutRouteInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutRouteInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutRouteInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusCreateManyRouteInputEnvelope = {
    data: BusCreateManyRouteInput | BusCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutRouteInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    tickets?: TicketCreateNestedManyWithoutTripInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutRouteInput = {
    id?: number
    bus_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutRouteInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput>
  }

  export type TripCreateManyRouteInputEnvelope = {
    data: TripCreateManyRouteInput | TripCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutesInput = {
    update: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type UserUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BusUpsertWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusUpdateWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
  }

  export type BusUpdateManyWithWhereWithoutRouteInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutRouteInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: IntFilter<"Bus"> | number
    user_id?: IntFilter<"Bus"> | number
    bus_number?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    route_id?: IntNullableFilter<"Bus"> | number | null
    driver_id?: IntNullableFilter<"Bus"> | number | null
    conductor_id?: IntNullableFilter<"Bus"> | number | null
    status?: EnumBusStatusFilter<"Bus"> | $Enums.BusStatus
    current_location?: StringNullableFilter<"Bus"> | string | null
    fuel_level?: DecimalNullableFilter<"Bus"> | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: DateTimeNullableFilter<"Bus"> | Date | string | null
    insurance_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    permit_expiry?: DateTimeNullableFilter<"Bus"> | Date | string | null
    created_at?: DateTimeFilter<"Bus"> | Date | string
    updated_at?: DateTimeFilter<"Bus"> | Date | string
  }

  export type TripUpsertWithWhereUniqueWithoutRouteInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutRouteInput, TripUncheckedUpdateWithoutRouteInput>
    create: XOR<TripCreateWithoutRouteInput, TripUncheckedCreateWithoutRouteInput>
  }

  export type TripUpdateWithWhereUniqueWithoutRouteInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutRouteInput, TripUncheckedUpdateWithoutRouteInput>
  }

  export type TripUpdateManyWithWhereWithoutRouteInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutRouteInput>
  }

  export type BusCreateWithoutTicketsInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutTicketsInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutTicketsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
  }

  export type POSMachineCreateWithoutTicketsInput = {
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus?: BusCreateNestedOneWithoutPosMachinesInput
  }

  export type POSMachineUncheckedCreateWithoutTicketsInput = {
    id?: number
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    bus_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type POSMachineCreateOrConnectWithoutTicketsInput = {
    where: POSMachineWhereUniqueInput
    create: XOR<POSMachineCreateWithoutTicketsInput, POSMachineUncheckedCreateWithoutTicketsInput>
  }

  export type TripCreateWithoutTicketsInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    route: RouteCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTicketsInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTicketsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTicketsInput, TripUncheckedCreateWithoutTicketsInput>
  }

  export type BusUpsertWithoutTicketsInput = {
    update: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type BusUpdateWithoutTicketsInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type POSMachineUpsertWithoutTicketsInput = {
    update: XOR<POSMachineUpdateWithoutTicketsInput, POSMachineUncheckedUpdateWithoutTicketsInput>
    create: XOR<POSMachineCreateWithoutTicketsInput, POSMachineUncheckedCreateWithoutTicketsInput>
    where?: POSMachineWhereInput
  }

  export type POSMachineUpdateToOneWithWhereWithoutTicketsInput = {
    where?: POSMachineWhereInput
    data: XOR<POSMachineUpdateWithoutTicketsInput, POSMachineUncheckedUpdateWithoutTicketsInput>
  }

  export type POSMachineUpdateWithoutTicketsInput = {
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneWithoutPosMachinesNestedInput
  }

  export type POSMachineUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    bus_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpsertWithoutTicketsInput = {
    update: XOR<TripUpdateWithoutTicketsInput, TripUncheckedUpdateWithoutTicketsInput>
    create: XOR<TripCreateWithoutTicketsInput, TripUncheckedCreateWithoutTicketsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTicketsInput, TripUncheckedUpdateWithoutTicketsInput>
  }

  export type TripUpdateWithoutTicketsInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type BusCreateWithoutTripsInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutTripsInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutTripsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTripsInput, BusUncheckedCreateWithoutTripsInput>
  }

  export type RouteCreateWithoutTripsInput = {
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    buses?: BusCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutTripsInput = {
    id?: number
    user_id: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutTripsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutTripsInput, RouteUncheckedCreateWithoutTripsInput>
  }

  export type UserCreateWithoutTripsDrivenInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsDrivenInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsDrivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
  }

  export type UserCreateWithoutTripsConductedInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsConductedInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsConductedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsConductedInput, UserUncheckedCreateWithoutTripsConductedInput>
  }

  export type TicketCreateWithoutTripInput = {
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    bus: BusCreateNestedOneWithoutTicketsInput
    posMachine?: POSMachineCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutTripInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
  }

  export type TicketCreateOrConnectWithoutTripInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput>
  }

  export type TicketCreateManyTripInputEnvelope = {
    data: TicketCreateManyTripInput | TicketCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutTripInput = {
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    bus: BusCreateNestedOneWithoutPackagesInput
  }

  export type PackageUncheckedCreateWithoutTripInput = {
    id?: number
    bus_id: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
  }

  export type PackageCreateOrConnectWithoutTripInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput>
  }

  export type PackageCreateManyTripInputEnvelope = {
    data: PackageCreateManyTripInput | PackageCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithoutTripsInput = {
    update: XOR<BusUpdateWithoutTripsInput, BusUncheckedUpdateWithoutTripsInput>
    create: XOR<BusCreateWithoutTripsInput, BusUncheckedCreateWithoutTripsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTripsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTripsInput, BusUncheckedUpdateWithoutTripsInput>
  }

  export type BusUpdateWithoutTripsInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
  }

  export type RouteUpsertWithoutTripsInput = {
    update: XOR<RouteUpdateWithoutTripsInput, RouteUncheckedUpdateWithoutTripsInput>
    create: XOR<RouteCreateWithoutTripsInput, RouteUncheckedCreateWithoutTripsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutTripsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutTripsInput, RouteUncheckedUpdateWithoutTripsInput>
  }

  export type RouteUpdateWithoutTripsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    buses?: BusUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type UserUpsertWithoutTripsDrivenInput = {
    update: XOR<UserUpdateWithoutTripsDrivenInput, UserUncheckedUpdateWithoutTripsDrivenInput>
    create: XOR<UserCreateWithoutTripsDrivenInput, UserUncheckedCreateWithoutTripsDrivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsDrivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsDrivenInput, UserUncheckedUpdateWithoutTripsDrivenInput>
  }

  export type UserUpdateWithoutTripsDrivenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsDrivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTripsConductedInput = {
    update: XOR<UserUpdateWithoutTripsConductedInput, UserUncheckedUpdateWithoutTripsConductedInput>
    create: XOR<UserCreateWithoutTripsConductedInput, UserUncheckedCreateWithoutTripsConductedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsConductedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsConductedInput, UserUncheckedUpdateWithoutTripsConductedInput>
  }

  export type UserUpdateWithoutTripsConductedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsConductedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutTripInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTripInput, TicketUncheckedUpdateWithoutTripInput>
    create: XOR<TicketCreateWithoutTripInput, TicketUncheckedCreateWithoutTripInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTripInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTripInput, TicketUncheckedUpdateWithoutTripInput>
  }

  export type TicketUpdateManyWithWhereWithoutTripInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTripInput>
  }

  export type PackageUpsertWithWhereUniqueWithoutTripInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutTripInput, PackageUncheckedUpdateWithoutTripInput>
    create: XOR<PackageCreateWithoutTripInput, PackageUncheckedCreateWithoutTripInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutTripInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutTripInput, PackageUncheckedUpdateWithoutTripInput>
  }

  export type PackageUpdateManyWithWhereWithoutTripInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutTripInput>
  }

  export type UserExtraCreateWithoutUserInput = {
    name?: string | null
    license_number?: string | null
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserExtraUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    license_number?: string | null
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserExtraCreateOrConnectWithoutUserInput = {
    where: UserExtraWhereUniqueInput
    create: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
  }

  export type BusCreateWithoutDriverInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutDriverInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutDriverInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
  }

  export type BusCreateManyDriverInputEnvelope = {
    data: BusCreateManyDriverInput | BusCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type BusCreateWithoutConductorInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutBusesInput
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutConductorInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutConductorInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput>
  }

  export type BusCreateManyConductorInputEnvelope = {
    data: BusCreateManyConductorInput | BusCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutDriverInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    route: RouteCreateNestedOneWithoutTripsInput
    conductor?: UserCreateNestedOneWithoutTripsConductedInput
    tickets?: TicketCreateNestedManyWithoutTripInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: TripCreateManyDriverInput | TripCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutConductorInput = {
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    created_at?: Date | string
    updated_at?: Date | string
    bus: BusCreateNestedOneWithoutTripsInput
    route: RouteCreateNestedOneWithoutTripsInput
    driver?: UserCreateNestedOneWithoutTripsDrivenInput
    tickets?: TicketCreateNestedManyWithoutTripInput
    packages?: PackageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutConductorInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTripInput
    packages?: PackageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutConductorInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput>
  }

  export type TripCreateManyConductorInputEnvelope = {
    data: TripCreateManyConductorInput | TripCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutUserInput = {
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusCreateNestedManyWithoutRouteInput
    trips?: TripCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    trips?: TripUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusCreateWithoutUserInput = {
    bus_number: string
    capacity?: number
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    route?: RouteCreateNestedOneWithoutBusesInput
    driver?: UserCreateNestedOneWithoutBusesDrivenInput
    conductor?: UserCreateNestedOneWithoutBusesConductedInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
    posMachines?: POSMachineCreateNestedManyWithoutBusInput
    trips?: TripCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutUserInput = {
    id?: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
    packages?: PackageUncheckedCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutBusInput
    posMachines?: POSMachineUncheckedCreateNestedManyWithoutBusInput
    trips?: TripUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutUserInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput>
  }

  export type BusCreateManyUserInputEnvelope = {
    data: BusCreateManyUserInput | BusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OTPCreateWithoutUserInput = {
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type OTPUncheckedCreateWithoutUserInput = {
    id?: number
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type OTPCreateOrConnectWithoutUserInput = {
    where: OTPWhereUniqueInput
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPCreateManyUserInputEnvelope = {
    data: OTPCreateManyUserInput | OTPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserExtraUpsertWithoutUserInput = {
    update: XOR<UserExtraUpdateWithoutUserInput, UserExtraUncheckedUpdateWithoutUserInput>
    create: XOR<UserExtraCreateWithoutUserInput, UserExtraUncheckedCreateWithoutUserInput>
    where?: UserExtraWhereInput
  }

  export type UserExtraUpdateToOneWithWhereWithoutUserInput = {
    where?: UserExtraWhereInput
    data: XOR<UserExtraUpdateWithoutUserInput, UserExtraUncheckedUpdateWithoutUserInput>
  }

  export type UserExtraUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExtraUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUpsertWithWhereUniqueWithoutDriverInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutDriverInput, BusUncheckedUpdateWithoutDriverInput>
    create: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
  }

  export type BusUpdateWithWhereUniqueWithoutDriverInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutDriverInput, BusUncheckedUpdateWithoutDriverInput>
  }

  export type BusUpdateManyWithWhereWithoutDriverInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutDriverInput>
  }

  export type BusUpsertWithWhereUniqueWithoutConductorInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutConductorInput, BusUncheckedUpdateWithoutConductorInput>
    create: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput>
  }

  export type BusUpdateWithWhereUniqueWithoutConductorInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutConductorInput, BusUncheckedUpdateWithoutConductorInput>
  }

  export type BusUpdateManyWithWhereWithoutConductorInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutConductorInput>
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDriverInput>
  }

  export type TripUpsertWithWhereUniqueWithoutConductorInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutConductorInput, TripUncheckedUpdateWithoutConductorInput>
    create: XOR<TripCreateWithoutConductorInput, TripUncheckedCreateWithoutConductorInput>
  }

  export type TripUpdateWithWhereUniqueWithoutConductorInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutConductorInput, TripUncheckedUpdateWithoutConductorInput>
  }

  export type TripUpdateManyWithWhereWithoutConductorInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutConductorInput>
  }

  export type RouteUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithWhereWithoutUserInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    user_id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    code?: StringFilter<"Route"> | string
    distance?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFilter<"Route"> | Decimal | DecimalJsLike | number | string
    stops?: JsonFilter<"Route">
    active?: BoolFilter<"Route"> | boolean
    created_at?: DateTimeFilter<"Route"> | Date | string
    updated_at?: DateTimeFilter<"Route"> | Date | string
  }

  export type BusUpsertWithWhereUniqueWithoutUserInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutUserInput, BusUncheckedUpdateWithoutUserInput>
    create: XOR<BusCreateWithoutUserInput, BusUncheckedCreateWithoutUserInput>
  }

  export type BusUpdateWithWhereUniqueWithoutUserInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutUserInput, BusUncheckedUpdateWithoutUserInput>
  }

  export type BusUpdateManyWithWhereWithoutUserInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPUpsertWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    update: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPUpdateWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    data: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
  }

  export type OTPUpdateManyWithWhereWithoutUserInput = {
    where: OTPScalarWhereInput
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPScalarWhereInput = {
    AND?: OTPScalarWhereInput | OTPScalarWhereInput[]
    OR?: OTPScalarWhereInput[]
    NOT?: OTPScalarWhereInput | OTPScalarWhereInput[]
    id?: IntFilter<"OTP"> | number
    user_id?: IntFilter<"OTP"> | number
    otp_code?: StringFilter<"OTP"> | string
    otp_type?: EnumOTPTypeFilter<"OTP"> | $Enums.OTPType
    expires_at?: DateTimeFilter<"OTP"> | Date | string
    is_used?: BoolFilter<"OTP"> | boolean
    created_at?: DateTimeFilter<"OTP"> | Date | string
  }

  export type UserCreateWithoutUserExtraInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserExtraInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserExtraInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserExtraInput, UserUncheckedCreateWithoutUserExtraInput>
  }

  export type UserUpsertWithoutUserExtraInput = {
    update: XOR<UserUpdateWithoutUserExtraInput, UserUncheckedUpdateWithoutUserExtraInput>
    create: XOR<UserCreateWithoutUserExtraInput, UserUncheckedCreateWithoutUserExtraInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserExtraInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserExtraInput, UserUncheckedUpdateWithoutUserExtraInput>
  }

  export type UserUpdateWithoutUserExtraInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserExtraInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpsInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraCreateNestedOneWithoutUserInput
    busesDriven?: BusCreateNestedManyWithoutDriverInput
    busesConducted?: BusCreateNestedManyWithoutConductorInput
    tripsDriven?: TripCreateNestedManyWithoutDriverInput
    tripsConducted?: TripCreateNestedManyWithoutConductorInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: number
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    userExtra?: UserExtraUncheckedCreateNestedOneWithoutUserInput
    busesDriven?: BusUncheckedCreateNestedManyWithoutDriverInput
    busesConducted?: BusUncheckedCreateNestedManyWithoutConductorInput
    tripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    tripsConducted?: TripUncheckedCreateNestedManyWithoutConductorInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUpdateOneWithoutUserNestedInput
    busesDriven?: BusUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUpdateManyWithoutConductorNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userExtra?: UserExtraUncheckedUpdateOneWithoutUserNestedInput
    busesDriven?: BusUncheckedUpdateManyWithoutDriverNestedInput
    busesConducted?: BusUncheckedUpdateManyWithoutConductorNestedInput
    tripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    tripsConducted?: TripUncheckedUpdateManyWithoutConductorNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketCreateManyBusInput = {
    id?: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type PackageCreateManyBusInput = {
    id?: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
    trip_id?: number | null
  }

  export type DailyReportCreateManyBusInput = {
    id?: number
    report_date: Date | string
    total_passengers?: number
    total_revenue?: Decimal | DecimalJsLike | number | string
    total_packages?: number
    package_revenue?: Decimal | DecimalJsLike | number | string
    fuel_cost?: Decimal | DecimalJsLike | number | string
    maintenance_cost?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type POSMachineCreateManyBusInput = {
    id?: number
    serial_no: string
    assigned?: boolean
    assigned_at?: Date | string | null
    status?: $Enums.POSStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TripCreateManyBusInput = {
    id?: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TicketUpdateWithoutBusInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    posMachine?: POSMachineUpdateOneWithoutTicketsNestedInput
    trip?: TripUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PackageUpdateWithoutBusInput = {
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trip?: TripUpdateOneWithoutPackagesNestedInput
  }

  export type PackageUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PackageUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyReportUpdateWithoutBusInput = {
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_passengers?: IntFieldUpdateOperationsInput | number
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_packages?: IntFieldUpdateOperationsInput | number
    package_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fuel_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maintenance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSMachineUpdateWithoutBusInput = {
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutPosMachineNestedInput
  }

  export type POSMachineUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutPosMachineNestedInput
  }

  export type POSMachineUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_no?: StringFieldUpdateOperationsInput | string
    assigned?: BoolFieldUpdateOperationsInput | boolean
    assigned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPOSStatusFieldUpdateOperationsInput | $Enums.POSStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutBusInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyPosMachineInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    payment_mode?: $Enums.PaymentMode
    trip_id?: number | null
  }

  export type TicketUpdateWithoutPosMachineInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    trip?: TripUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPosMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketUncheckedUpdateManyWithoutPosMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BusCreateManyRouteInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TripCreateManyRouteInput = {
    id?: number
    bus_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BusUpdateWithoutRouteInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutRouteInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTripInput = {
    id?: number
    bus_id: number
    ticket_number: string
    passenger_name?: string | null
    passenger_phone?: string | null
    from_stop: string
    to_stop: string
    passenger_type?: $Enums.PassengerType
    fare: Decimal | DecimalJsLike | number | string
    issue_time?: Date | string
    journey_date: Date | string
    status?: $Enums.TicketStatus
    seat_no?: number | null
    pos_machine_id?: number | null
    payment_mode?: $Enums.PaymentMode
  }

  export type PackageCreateManyTripInput = {
    id?: number
    bus_id: number
    package_number: string
    sender_name: string
    sender_phone: string
    receiver_name: string
    receiver_phone: string
    from_stop: string
    to_stop: string
    description?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    fare: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageStatus
    booked_at?: Date | string
    delivered_at?: Date | string | null
  }

  export type TicketUpdateWithoutTripInput = {
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    posMachine?: POSMachineUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
  }

  export type TicketUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    passenger_phone?: NullableStringFieldUpdateOperationsInput | string | null
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    passenger_type?: EnumPassengerTypeFieldUpdateOperationsInput | $Enums.PassengerType
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issue_time?: DateTimeFieldUpdateOperationsInput | Date | string
    journey_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    seat_no?: NullableIntFieldUpdateOperationsInput | number | null
    pos_machine_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_mode?: EnumPaymentModeFieldUpdateOperationsInput | $Enums.PaymentMode
  }

  export type PackageUpdateWithoutTripInput = {
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bus?: BusUpdateOneRequiredWithoutPackagesNestedInput
  }

  export type PackageUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackageUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    package_number?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    sender_phone?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    receiver_phone?: StringFieldUpdateOperationsInput | string
    from_stop?: StringFieldUpdateOperationsInput | string
    to_stop?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageStatusFieldUpdateOperationsInput | $Enums.PackageStatus
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusCreateManyDriverInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BusCreateManyConductorInput = {
    id?: number
    user_id: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TripCreateManyDriverInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    conductor_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TripCreateManyConductorInput = {
    id?: number
    bus_id: number
    route_id: number
    start_time: Date | string
    end_time?: Date | string | null
    status?: $Enums.TripStatus
    driver_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RouteCreateManyUserInput = {
    id?: number
    name: string
    code: string
    distance: Decimal | DecimalJsLike | number | string
    base_fare: Decimal | DecimalJsLike | number | string
    per_km_rate: Decimal | DecimalJsLike | number | string
    stops: JsonNullValueInput | InputJsonValue
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BusCreateManyUserInput = {
    id?: number
    bus_number: string
    capacity?: number
    route_id?: number | null
    driver_id?: number | null
    conductor_id?: number | null
    status?: $Enums.BusStatus
    current_location?: string | null
    fuel_level?: Decimal | DecimalJsLike | number | string | null
    last_maintenance?: Date | string | null
    insurance_expiry?: Date | string | null
    permit_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OTPCreateManyUserInput = {
    id?: number
    otp_code: string
    otp_type: $Enums.OTPType
    expires_at: Date | string
    is_used?: boolean
    created_at?: Date | string
  }

  export type BusUpdateWithoutDriverInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUpdateWithoutConductorInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusesNestedInput
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutDriverInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    conductor?: UserUpdateOneWithoutTripsConductedNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutConductorInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutTripsNestedInput
    route?: RouteUpdateOneRequiredWithoutTripsNestedInput
    driver?: UserUpdateOneWithoutTripsDrivenNestedInput
    tickets?: TicketUpdateManyWithoutTripNestedInput
    packages?: PackageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTripNestedInput
    packages?: PackageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUpdateManyWithoutRouteNestedInput
    trips?: TripUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    trips?: TripUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    base_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    per_km_rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stops?: JsonNullValueInput | InputJsonValue
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUpdateWithoutUserInput = {
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneWithoutBusesNestedInput
    driver?: UserUpdateOneWithoutBusesDrivenNestedInput
    conductor?: UserUpdateOneWithoutBusesConductedNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUpdateManyWithoutBusNestedInput
    trips?: TripUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
    packages?: PackageUncheckedUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutBusNestedInput
    posMachines?: POSMachineUncheckedUpdateManyWithoutBusNestedInput
    trips?: TripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bus_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    conductor_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBusStatusFieldUpdateOperationsInput | $Enums.BusStatus
    current_location?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_level?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    last_maintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insurance_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permit_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUpdateWithoutUserInput = {
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp_code?: StringFieldUpdateOperationsInput | string
    otp_type?: EnumOTPTypeFieldUpdateOperationsInput | $Enums.OTPType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}