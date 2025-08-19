
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
 * Model Conductor
 * 
 */
export type Conductor = $Result.DefaultSelection<Prisma.$ConductorPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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

export type PassengerType = $Enums.PassengerType

export const PassengerType: typeof $Enums.PassengerType

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

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
   * `prisma.conductor`: Exposes CRUD operations for the **Conductor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductors
    * const conductors = await prisma.conductor.findMany()
    * ```
    */
  get conductor(): Prisma.ConductorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
    Conductor: 'Conductor',
    Driver: 'Driver',
    Package: 'Package',
    DailyReport: 'DailyReport',
    Route: 'Route',
    Ticket: 'Ticket',
    User: 'User',
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
      modelProps: "bus" | "conductor" | "driver" | "package" | "dailyReport" | "route" | "ticket" | "user" | "oTP"
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
      Conductor: {
        payload: Prisma.$ConductorPayload<ExtArgs>
        fields: Prisma.ConductorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findFirst: {
            args: Prisma.ConductorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findMany: {
            args: Prisma.ConductorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          create: {
            args: Prisma.ConductorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          createMany: {
            args: Prisma.ConductorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConductorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          update: {
            args: Prisma.ConductorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          deleteMany: {
            args: Prisma.ConductorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConductorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          aggregate: {
            args: Prisma.ConductorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductor>
          }
          groupBy: {
            args: Prisma.ConductorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductorCountArgs<ExtArgs>
            result: $Utils.Optional<ConductorCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
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
    conductor?: ConductorOmit
    driver?: DriverOmit
    package?: PackageOmit
    dailyReport?: DailyReportOmit
    route?: RouteOmit
    ticket?: TicketOmit
    user?: UserOmit
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
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | BusCountOutputTypeCountTicketsArgs
    packages?: boolean | BusCountOutputTypeCountPackagesArgs
    dailyReports?: boolean | BusCountOutputTypeCountDailyReportsArgs
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
   * Count Type ConductorCountOutputType
   */

  export type ConductorCountOutputType = {
    buses: number
  }

  export type ConductorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | ConductorCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConductorCountOutputType
     */
    select?: ConductorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    buses: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | DriverCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    buses: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | RouteCountOutputTypeCountBusesArgs
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    drivers: number
    routes: number
    conductors: number
    buses: number
    otps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | UserCountOutputTypeCountDriversArgs
    routes?: boolean | UserCountOutputTypeCountRoutesArgs
    conductors?: boolean | UserCountOutputTypeCountConductorsArgs
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
  export type UserCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
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
  export type UserCountOutputTypeCountConductorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
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
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs> | null
      driver: Prisma.$DriverPayload<ExtArgs> | null
      conductor: Prisma.$ConductorPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      packages: Prisma.$PackagePayload<ExtArgs>[]
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
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
    driver<T extends Bus$driverArgs<ExtArgs> = {}>(args?: Subset<T, Bus$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conductor<T extends Bus$conductorArgs<ExtArgs> = {}>(args?: Subset<T, Bus$conductorArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Bus$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Bus$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Bus$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReports<T extends Bus$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Bus.conductor
   */
  export type Bus$conductorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    where?: ConductorWhereInput
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
   * Model Conductor
   */

  export type AggregateConductor = {
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  export type ConductorAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    experience_years: number | null
  }

  export type ConductorSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    experience_years: number | null
  }

  export type ConductorMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    phone: string | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConductorMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    phone: string | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConductorCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    phone: number
    experience_years: number
    address: number
    emergency_contact: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConductorAvgAggregateInputType = {
    id?: true
    user_id?: true
    experience_years?: true
  }

  export type ConductorSumAggregateInputType = {
    id?: true
    user_id?: true
    experience_years?: true
  }

  export type ConductorMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type ConductorMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type ConductorCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConductorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductor to aggregate.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductors
    **/
    _count?: true | ConductorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConductorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConductorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductorMaxAggregateInputType
  }

  export type GetConductorAggregateType<T extends ConductorAggregateArgs> = {
        [P in keyof T & keyof AggregateConductor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductor[P]>
      : GetScalarType<T[P], AggregateConductor[P]>
  }




  export type ConductorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithAggregationInput | ConductorOrderByWithAggregationInput[]
    by: ConductorScalarFieldEnum[] | ConductorScalarFieldEnum
    having?: ConductorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductorCountAggregateInputType | true
    _avg?: ConductorAvgAggregateInputType
    _sum?: ConductorSumAggregateInputType
    _min?: ConductorMinAggregateInputType
    _max?: ConductorMaxAggregateInputType
  }

  export type ConductorGroupByOutputType = {
    id: number
    user_id: number
    name: string
    phone: string
    experience_years: number
    address: string | null
    emergency_contact: string | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  type GetConductorGroupByPayload<T extends ConductorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductorGroupByOutputType[P]>
            : GetScalarType<T[P], ConductorGroupByOutputType[P]>
        }
      >
    >


  export type ConductorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    phone?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Conductor$busesArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>



  export type ConductorSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    phone?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConductorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "phone" | "experience_years" | "address" | "emergency_contact" | "active" | "created_at" | "updated_at", ExtArgs["result"]["conductor"]>
  export type ConductorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Conductor$busesArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConductorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      phone: string
      experience_years: number
      address: string | null
      emergency_contact: string | null
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["conductor"]>
    composites: {}
  }

  type ConductorGetPayload<S extends boolean | null | undefined | ConductorDefaultArgs> = $Result.GetResult<Prisma.$ConductorPayload, S>

  type ConductorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductorCountAggregateInputType | true
    }

  export interface ConductorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductor'], meta: { name: 'Conductor' } }
    /**
     * Find zero or one Conductor that matches the filter.
     * @param {ConductorFindUniqueArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductorFindUniqueArgs>(args: SelectSubset<T, ConductorFindUniqueArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductorFindUniqueOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductorFindFirstArgs>(args?: SelectSubset<T, ConductorFindFirstArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductors
     * const conductors = await prisma.conductor.findMany()
     * 
     * // Get first 10 Conductors
     * const conductors = await prisma.conductor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conductorWithIdOnly = await prisma.conductor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConductorFindManyArgs>(args?: SelectSubset<T, ConductorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductor.
     * @param {ConductorCreateArgs} args - Arguments to create a Conductor.
     * @example
     * // Create one Conductor
     * const Conductor = await prisma.conductor.create({
     *   data: {
     *     // ... data to create a Conductor
     *   }
     * })
     * 
     */
    create<T extends ConductorCreateArgs>(args: SelectSubset<T, ConductorCreateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductors.
     * @param {ConductorCreateManyArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductorCreateManyArgs>(args?: SelectSubset<T, ConductorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conductor.
     * @param {ConductorDeleteArgs} args - Arguments to delete one Conductor.
     * @example
     * // Delete one Conductor
     * const Conductor = await prisma.conductor.delete({
     *   where: {
     *     // ... filter to delete one Conductor
     *   }
     * })
     * 
     */
    delete<T extends ConductorDeleteArgs>(args: SelectSubset<T, ConductorDeleteArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductor.
     * @param {ConductorUpdateArgs} args - Arguments to update one Conductor.
     * @example
     * // Update one Conductor
     * const conductor = await prisma.conductor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductorUpdateArgs>(args: SelectSubset<T, ConductorUpdateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductors.
     * @param {ConductorDeleteManyArgs} args - Arguments to filter Conductors to delete.
     * @example
     * // Delete a few Conductors
     * const { count } = await prisma.conductor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductorDeleteManyArgs>(args?: SelectSubset<T, ConductorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductorUpdateManyArgs>(args: SelectSubset<T, ConductorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conductor.
     * @param {ConductorUpsertArgs} args - Arguments to update or create a Conductor.
     * @example
     * // Update or create a Conductor
     * const conductor = await prisma.conductor.upsert({
     *   create: {
     *     // ... data to create a Conductor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductor we want to update
     *   }
     * })
     */
    upsert<T extends ConductorUpsertArgs>(args: SelectSubset<T, ConductorUpsertArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorCountArgs} args - Arguments to filter Conductors to count.
     * @example
     * // Count the number of Conductors
     * const count = await prisma.conductor.count({
     *   where: {
     *     // ... the filter for the Conductors we want to count
     *   }
     * })
    **/
    count<T extends ConductorCountArgs>(
      args?: Subset<T, ConductorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConductorAggregateArgs>(args: Subset<T, ConductorAggregateArgs>): Prisma.PrismaPromise<GetConductorAggregateType<T>>

    /**
     * Group by Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorGroupByArgs} args - Group by arguments.
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
      T extends ConductorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductorGroupByArgs['orderBy'] }
        : { orderBy?: ConductorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConductorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductor model
   */
  readonly fields: ConductorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buses<T extends Conductor$busesArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conductor model
   */
  interface ConductorFieldRefs {
    readonly id: FieldRef<"Conductor", 'Int'>
    readonly user_id: FieldRef<"Conductor", 'Int'>
    readonly name: FieldRef<"Conductor", 'String'>
    readonly phone: FieldRef<"Conductor", 'String'>
    readonly experience_years: FieldRef<"Conductor", 'Int'>
    readonly address: FieldRef<"Conductor", 'String'>
    readonly emergency_contact: FieldRef<"Conductor", 'String'>
    readonly active: FieldRef<"Conductor", 'Boolean'>
    readonly created_at: FieldRef<"Conductor", 'DateTime'>
    readonly updated_at: FieldRef<"Conductor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conductor findUnique
   */
  export type ConductorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findUniqueOrThrow
   */
  export type ConductorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findFirst
   */
  export type ConductorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findFirstOrThrow
   */
  export type ConductorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findMany
   */
  export type ConductorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductors to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor create
   */
  export type ConductorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductor.
     */
    data: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
  }

  /**
   * Conductor createMany
   */
  export type ConductorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor update
   */
  export type ConductorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductor.
     */
    data: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
    /**
     * Choose, which Conductor to update.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor updateMany
   */
  export type ConductorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor upsert
   */
  export type ConductorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductor to update in case it exists.
     */
    where: ConductorWhereUniqueInput
    /**
     * In case the Conductor found by the `where` argument doesn't exist, create a new Conductor with this data.
     */
    create: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
    /**
     * In case the Conductor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
  }

  /**
   * Conductor delete
   */
  export type ConductorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter which Conductor to delete.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor deleteMany
   */
  export type ConductorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductors to delete
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to delete.
     */
    limit?: number
  }

  /**
   * Conductor.buses
   */
  export type Conductor$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Conductor without action
   */
  export type ConductorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    experience_years: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    experience_years: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    phone: string | null
    license_number: string | null
    license_expiry: Date | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    phone: string | null
    license_number: string | null
    license_expiry: Date | null
    experience_years: number | null
    address: string | null
    emergency_contact: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    phone: number
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


  export type DriverAvgAggregateInputType = {
    id?: true
    user_id?: true
    experience_years?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    user_id?: true
    experience_years?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
    license_number?: true
    license_expiry?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
    license_number?: true
    license_expiry?: true
    experience_years?: true
    address?: true
    emergency_contact?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    phone?: true
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

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    user_id: number
    name: string
    phone: string
    license_number: string
    license_expiry: Date | null
    experience_years: number
    address: string | null
    emergency_contact: string | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    phone?: boolean
    license_number?: boolean
    license_expiry?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Driver$busesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    phone?: boolean
    license_number?: boolean
    license_expiry?: boolean
    experience_years?: boolean
    address?: boolean
    emergency_contact?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "phone" | "license_number" | "license_expiry" | "experience_years" | "address" | "emergency_contact" | "active" | "created_at" | "updated_at", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    buses?: boolean | Driver$busesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string
      phone: string
      license_number: string
      license_expiry: Date | null
      experience_years: number
      address: string | null
      emergency_contact: string | null
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buses<T extends Driver$busesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly user_id: FieldRef<"Driver", 'Int'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly license_number: FieldRef<"Driver", 'String'>
    readonly license_expiry: FieldRef<"Driver", 'DateTime'>
    readonly experience_years: FieldRef<"Driver", 'Int'>
    readonly address: FieldRef<"Driver", 'String'>
    readonly emergency_contact: FieldRef<"Driver", 'String'>
    readonly active: FieldRef<"Driver", 'Boolean'>
    readonly created_at: FieldRef<"Driver", 'DateTime'>
    readonly updated_at: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.buses
   */
  export type Driver$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
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
  }

  export type PackageSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    weight: Decimal | null
    fare: Decimal | null
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
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    id?: true
    bus_id?: true
    weight?: true
    fare?: true
  }

  export type PackageSumAggregateInputType = {
    id?: true
    bus_id?: true
    weight?: true
    fare?: true
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
    bus?: boolean | BusDefaultArgs<ExtArgs>
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
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "package_number" | "sender_name" | "sender_phone" | "receiver_name" | "receiver_phone" | "from_stop" | "to_stop" | "description" | "weight" | "fare" | "status" | "booked_at" | "delivered_at", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
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
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buses: Prisma.$BusPayload<ExtArgs>[]
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
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
    fare: Decimal | null
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
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    bus_id?: true
    fare?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    bus_id?: true
    fare?: true
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
    bus?: boolean | BusDefaultArgs<ExtArgs>
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
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bus_id" | "ticket_number" | "passenger_name" | "passenger_phone" | "from_stop" | "to_stop" | "passenger_type" | "fare" | "issue_time" | "journey_date" | "status", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
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
    drivers?: boolean | User$driversArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    conductors?: boolean | User$conductorsArgs<ExtArgs>
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
    drivers?: boolean | User$driversArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    conductors?: boolean | User$conductorsArgs<ExtArgs>
    buses?: boolean | User$busesArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      drivers: Prisma.$DriverPayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
      conductors: Prisma.$ConductorPayload<ExtArgs>[]
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
    drivers<T extends User$driversArgs<ExtArgs> = {}>(args?: Subset<T, User$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends User$routesArgs<ExtArgs> = {}>(args?: Subset<T, User$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conductors<T extends User$conductorsArgs<ExtArgs> = {}>(args?: Subset<T, User$conductorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.drivers
   */
  export type User$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
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
   * User.conductors
   */
  export type User$conductorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    cursor?: ConductorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
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


  export const ConductorScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    phone: 'phone',
    experience_years: 'experience_years',
    address: 'address',
    emergency_contact: 'emergency_contact',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConductorScalarFieldEnum = (typeof ConductorScalarFieldEnum)[keyof typeof ConductorScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    phone: 'phone',
    license_number: 'license_number',
    license_expiry: 'license_expiry',
    experience_years: 'experience_years',
    address: 'address',
    emergency_contact: 'emergency_contact',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


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
    delivered_at: 'delivered_at'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


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
    status: 'status'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


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


  export const ConductorOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    address: 'address',
    emergency_contact: 'emergency_contact'
  };

  export type ConductorOrderByRelevanceFieldEnum = (typeof ConductorOrderByRelevanceFieldEnum)[keyof typeof ConductorOrderByRelevanceFieldEnum]


  export const DriverOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    license_number: 'license_number',
    address: 'address',
    emergency_contact: 'emergency_contact'
  };

  export type DriverOrderByRelevanceFieldEnum = (typeof DriverOrderByRelevanceFieldEnum)[keyof typeof DriverOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PackageStatus'
   */
  export type EnumPackageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageStatus'>
    


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
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    conductor?: XOR<ConductorNullableScalarRelationFilter, ConductorWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
    dailyReports?: DailyReportListRelationFilter
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
    driver?: DriverOrderByWithRelationInput
    conductor?: ConductorOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    packages?: PackageOrderByRelationAggregateInput
    dailyReports?: DailyReportOrderByRelationAggregateInput
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
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    conductor?: XOR<ConductorNullableScalarRelationFilter, ConductorWhereInput> | null
    tickets?: TicketListRelationFilter
    packages?: PackageListRelationFilter
    dailyReports?: DailyReportListRelationFilter
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

  export type ConductorWhereInput = {
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    id?: IntFilter<"Conductor"> | number
    user_id?: IntFilter<"Conductor"> | number
    name?: StringFilter<"Conductor"> | string
    phone?: StringFilter<"Conductor"> | string
    experience_years?: IntFilter<"Conductor"> | number
    address?: StringNullableFilter<"Conductor"> | string | null
    emergency_contact?: StringNullableFilter<"Conductor"> | string | null
    active?: BoolFilter<"Conductor"> | boolean
    created_at?: DateTimeFilter<"Conductor"> | Date | string
    updated_at?: DateTimeFilter<"Conductor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
  }

  export type ConductorOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    buses?: BusOrderByRelationAggregateInput
    _relevance?: ConductorOrderByRelevanceInput
  }

  export type ConductorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    user_id?: IntFilter<"Conductor"> | number
    name?: StringFilter<"Conductor"> | string
    phone?: StringFilter<"Conductor"> | string
    experience_years?: IntFilter<"Conductor"> | number
    address?: StringNullableFilter<"Conductor"> | string | null
    emergency_contact?: StringNullableFilter<"Conductor"> | string | null
    active?: BoolFilter<"Conductor"> | boolean
    created_at?: DateTimeFilter<"Conductor"> | Date | string
    updated_at?: DateTimeFilter<"Conductor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
  }, "id">

  export type ConductorOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConductorCountOrderByAggregateInput
    _avg?: ConductorAvgOrderByAggregateInput
    _max?: ConductorMaxOrderByAggregateInput
    _min?: ConductorMinOrderByAggregateInput
    _sum?: ConductorSumOrderByAggregateInput
  }

  export type ConductorScalarWhereWithAggregatesInput = {
    AND?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    OR?: ConductorScalarWhereWithAggregatesInput[]
    NOT?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conductor"> | number
    user_id?: IntWithAggregatesFilter<"Conductor"> | number
    name?: StringWithAggregatesFilter<"Conductor"> | string
    phone?: StringWithAggregatesFilter<"Conductor"> | string
    experience_years?: IntWithAggregatesFilter<"Conductor"> | number
    address?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
    emergency_contact?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
    active?: BoolWithAggregatesFilter<"Conductor"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Conductor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Conductor"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    user_id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    license_number?: StringFilter<"Driver"> | string
    license_expiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    experience_years?: IntFilter<"Driver"> | number
    address?: StringNullableFilter<"Driver"> | string | null
    emergency_contact?: StringNullableFilter<"Driver"> | string | null
    active?: BoolFilter<"Driver"> | boolean
    created_at?: DateTimeFilter<"Driver"> | Date | string
    updated_at?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrderInput | SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    buses?: BusOrderByRelationAggregateInput
    _relevance?: DriverOrderByRelevanceInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    user_id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    license_number?: StringFilter<"Driver"> | string
    license_expiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    experience_years?: IntFilter<"Driver"> | number
    address?: StringNullableFilter<"Driver"> | string | null
    emergency_contact?: StringNullableFilter<"Driver"> | string | null
    active?: BoolFilter<"Driver"> | boolean
    created_at?: DateTimeFilter<"Driver"> | Date | string
    updated_at?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buses?: BusListRelationFilter
  }, "id">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrderInput | SortOrder
    experience_years?: SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    user_id?: IntWithAggregatesFilter<"Driver"> | number
    name?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    license_number?: StringWithAggregatesFilter<"Driver"> | string
    license_expiry?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    experience_years?: IntWithAggregatesFilter<"Driver"> | number
    address?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    emergency_contact?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    active?: BoolWithAggregatesFilter<"Driver"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
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
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
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
    bus?: BusOrderByWithRelationInput
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
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
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
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
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
    bus?: BusOrderByWithRelationInput
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
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
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
    drivers?: DriverListRelationFilter
    routes?: RouteListRelationFilter
    conductors?: ConductorListRelationFilter
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
    drivers?: DriverOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
    conductors?: ConductorOrderByRelationAggregateInput
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
    drivers?: DriverListRelationFilter
    routes?: RouteListRelationFilter
    conductors?: ConductorListRelationFilter
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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

  export type ConductorCreateInput = {
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutConductorsInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConductorsNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductorCreateManyInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConductorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConductorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDriversInput
    buses?: BusCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriversNestedInput
    buses?: BusUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
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
    bus: BusCreateNestedOneWithoutTicketsInput
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
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
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
    drivers?: DriverCreateNestedManyWithoutUserInput
    routes?: RouteCreateNestedManyWithoutUserInput
    conductors?: ConductorCreateNestedManyWithoutUserInput
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
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    conductors?: ConductorUncheckedCreateNestedManyWithoutUserInput
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
    drivers?: DriverUpdateManyWithoutUserNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    conductors?: ConductorUpdateManyWithoutUserNestedInput
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
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    conductors?: ConductorUncheckedUpdateManyWithoutUserNestedInput
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

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type ConductorNullableScalarRelationFilter = {
    is?: ConductorWhereInput | null
    isNot?: ConductorWhereInput | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConductorOrderByRelevanceInput = {
    fields: ConductorOrderByRelevanceFieldEnum | ConductorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConductorCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConductorAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience_years?: SortOrder
  }

  export type ConductorMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConductorMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConductorSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience_years?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DriverOrderByRelevanceInput = {
    fields: DriverOrderByRelevanceFieldEnum | DriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience_years?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    license_number?: SortOrder
    license_expiry?: SortOrder
    experience_years?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience_years?: SortOrder
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
  }

  export type PackageAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
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
  }

  export type PackageSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    weight?: SortOrder
    fare?: SortOrder
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
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    fare?: SortOrder
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
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
    fare?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type ConductorListRelationFilter = {
    every?: ConductorWhereInput
    some?: ConductorWhereInput
    none?: ConductorWhereInput
  }

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConductorOrderByRelationAggregateInput = {
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

  export type DriverCreateNestedOneWithoutBusesInput = {
    create?: XOR<DriverCreateWithoutBusesInput, DriverUncheckedCreateWithoutBusesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutBusesInput
    connect?: DriverWhereUniqueInput
  }

  export type ConductorCreateNestedOneWithoutBusesInput = {
    create?: XOR<ConductorCreateWithoutBusesInput, ConductorUncheckedCreateWithoutBusesInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutBusesInput
    connect?: ConductorWhereUniqueInput
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

  export type DriverUpdateOneWithoutBusesNestedInput = {
    create?: XOR<DriverCreateWithoutBusesInput, DriverUncheckedCreateWithoutBusesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutBusesInput
    upsert?: DriverUpsertWithoutBusesInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutBusesInput, DriverUpdateWithoutBusesInput>, DriverUncheckedUpdateWithoutBusesInput>
  }

  export type ConductorUpdateOneWithoutBusesNestedInput = {
    create?: XOR<ConductorCreateWithoutBusesInput, ConductorUncheckedCreateWithoutBusesInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutBusesInput
    upsert?: ConductorUpsertWithoutBusesInput
    disconnect?: ConductorWhereInput | boolean
    delete?: ConductorWhereInput | boolean
    connect?: ConductorWhereUniqueInput
    update?: XOR<XOR<ConductorUpdateToOneWithWhereWithoutBusesInput, ConductorUpdateWithoutBusesInput>, ConductorUncheckedUpdateWithoutBusesInput>
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

  export type UserCreateNestedOneWithoutConductorsInput = {
    create?: XOR<UserCreateWithoutConductorsInput, UserUncheckedCreateWithoutConductorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductorsInput
    connect?: UserWhereUniqueInput
  }

  export type BusCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutConductorsNestedInput = {
    create?: XOR<UserCreateWithoutConductorsInput, UserUncheckedCreateWithoutConductorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductorsInput
    upsert?: UserUpsertWithoutConductorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConductorsInput, UserUpdateWithoutConductorsInput>, UserUncheckedUpdateWithoutConductorsInput>
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

  export type UserCreateNestedOneWithoutDriversInput = {
    create?: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriversInput
    connect?: UserWhereUniqueInput
  }

  export type BusCreateNestedManyWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput> | BusCreateWithoutDriverInput[] | BusUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput | BusCreateOrConnectWithoutDriverInput[]
    createMany?: BusCreateManyDriverInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDriversNestedInput = {
    create?: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriversInput
    upsert?: UserUpsertWithoutDriversInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriversInput, UserUpdateWithoutDriversInput>, UserUncheckedUpdateWithoutDriversInput>
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

  export type BusCreateNestedOneWithoutPackagesInput = {
    create?: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: BusCreateOrConnectWithoutPackagesInput
    connect?: BusWhereUniqueInput
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

  export type BusUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
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

  export type BusCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    connect?: BusWhereUniqueInput
  }

  export type EnumPassengerTypeFieldUpdateOperationsInput = {
    set?: $Enums.PassengerType
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type BusUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    upsert?: BusUpsertWithoutTicketsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTicketsInput, BusUpdateWithoutTicketsInput>, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type DriverCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ConductorCreateNestedManyWithoutUserInput = {
    create?: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput> | ConductorCreateWithoutUserInput[] | ConductorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutUserInput | ConductorCreateOrConnectWithoutUserInput[]
    createMany?: ConductorCreateManyUserInputEnvelope
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
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

  export type DriverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ConductorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput> | ConductorCreateWithoutUserInput[] | ConductorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutUserInput | ConductorCreateOrConnectWithoutUserInput[]
    createMany?: ConductorCreateManyUserInputEnvelope
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
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

  export type DriverUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUserInput | DriverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUserInput | DriverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUserInput | DriverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
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

  export type ConductorUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput> | ConductorCreateWithoutUserInput[] | ConductorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutUserInput | ConductorCreateOrConnectWithoutUserInput[]
    upsert?: ConductorUpsertWithWhereUniqueWithoutUserInput | ConductorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConductorCreateManyUserInputEnvelope
    set?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    disconnect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    delete?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    update?: ConductorUpdateWithWhereUniqueWithoutUserInput | ConductorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConductorUpdateManyWithWhereWithoutUserInput | ConductorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
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

  export type DriverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUserInput | DriverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUserInput | DriverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUserInput | DriverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
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

  export type ConductorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput> | ConductorCreateWithoutUserInput[] | ConductorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConductorCreateOrConnectWithoutUserInput | ConductorCreateOrConnectWithoutUserInput[]
    upsert?: ConductorUpsertWithWhereUniqueWithoutUserInput | ConductorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConductorCreateManyUserInputEnvelope
    set?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    disconnect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    delete?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    connect?: ConductorWhereUniqueInput | ConductorWhereUniqueInput[]
    update?: ConductorUpdateWithWhereUniqueWithoutUserInput | ConductorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConductorUpdateManyWithWhereWithoutUserInput | ConductorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    drivers?: DriverCreateNestedManyWithoutUserInput
    routes?: RouteCreateNestedManyWithoutUserInput
    conductors?: ConductorCreateNestedManyWithoutUserInput
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
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    conductors?: ConductorUncheckedCreateNestedManyWithoutUserInput
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
  }

  export type RouteCreateOrConnectWithoutBusesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
  }

  export type DriverCreateWithoutBusesInput = {
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutBusesInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DriverCreateOrConnectWithoutBusesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutBusesInput, DriverUncheckedCreateWithoutBusesInput>
  }

  export type ConductorCreateWithoutBusesInput = {
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutConductorsInput
  }

  export type ConductorUncheckedCreateWithoutBusesInput = {
    id?: number
    user_id: number
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConductorCreateOrConnectWithoutBusesInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutBusesInput, ConductorUncheckedCreateWithoutBusesInput>
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
    drivers?: DriverUpdateManyWithoutUserNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    conductors?: ConductorUpdateManyWithoutUserNestedInput
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
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    conductors?: ConductorUncheckedUpdateManyWithoutUserNestedInput
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
  }

  export type DriverUpsertWithoutBusesInput = {
    update: XOR<DriverUpdateWithoutBusesInput, DriverUncheckedUpdateWithoutBusesInput>
    create: XOR<DriverCreateWithoutBusesInput, DriverUncheckedCreateWithoutBusesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutBusesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutBusesInput, DriverUncheckedUpdateWithoutBusesInput>
  }

  export type DriverUpdateWithoutBusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConductorUpsertWithoutBusesInput = {
    update: XOR<ConductorUpdateWithoutBusesInput, ConductorUncheckedUpdateWithoutBusesInput>
    create: XOR<ConductorCreateWithoutBusesInput, ConductorUncheckedCreateWithoutBusesInput>
    where?: ConductorWhereInput
  }

  export type ConductorUpdateToOneWithWhereWithoutBusesInput = {
    where?: ConductorWhereInput
    data: XOR<ConductorUpdateWithoutBusesInput, ConductorUncheckedUpdateWithoutBusesInput>
  }

  export type ConductorUpdateWithoutBusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConductorsNestedInput
  }

  export type ConductorUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCreateWithoutConductorsInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    drivers?: DriverCreateNestedManyWithoutUserInput
    routes?: RouteCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConductorsInput = {
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
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConductorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConductorsInput, UserUncheckedCreateWithoutConductorsInput>
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
  }

  export type BusCreateOrConnectWithoutConductorInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput>
  }

  export type BusCreateManyConductorInputEnvelope = {
    data: BusCreateManyConductorInput | BusCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConductorsInput = {
    update: XOR<UserUpdateWithoutConductorsInput, UserUncheckedUpdateWithoutConductorsInput>
    create: XOR<UserCreateWithoutConductorsInput, UserUncheckedCreateWithoutConductorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConductorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConductorsInput, UserUncheckedUpdateWithoutConductorsInput>
  }

  export type UserUpdateWithoutConductorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutUserNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConductorsInput = {
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
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserCreateWithoutDriversInput = {
    name: string
    email?: string | null
    password?: string | null
    phone: string
    role?: $Enums.Role
    company_name?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    conductors?: ConductorCreateNestedManyWithoutUserInput
    buses?: BusCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDriversInput = {
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
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    conductors?: ConductorUncheckedCreateNestedManyWithoutUserInput
    buses?: BusUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDriversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
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
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
  }

  export type BusCreateOrConnectWithoutDriverInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
  }

  export type BusCreateManyDriverInputEnvelope = {
    data: BusCreateManyDriverInput | BusCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDriversInput = {
    update: XOR<UserUpdateWithoutDriversInput, UserUncheckedUpdateWithoutDriversInput>
    create: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriversInput, UserUncheckedUpdateWithoutDriversInput>
  }

  export type UserUpdateWithoutDriversInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    conductors?: ConductorUpdateManyWithoutUserNestedInput
    buses?: BusUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDriversInput = {
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
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    conductors?: ConductorUncheckedUpdateManyWithoutUserNestedInput
    buses?: BusUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
  }

  export type BusCreateOrConnectWithoutPackagesInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutPackagesInput, BusUncheckedCreateWithoutPackagesInput>
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
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
    drivers?: DriverCreateNestedManyWithoutUserInput
    conductors?: ConductorCreateNestedManyWithoutUserInput
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
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    conductors?: ConductorUncheckedCreateNestedManyWithoutUserInput
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
  }

  export type BusCreateOrConnectWithoutRouteInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusCreateManyRouteInputEnvelope = {
    data: BusCreateManyRouteInput | BusCreateManyRouteInput[]
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
    drivers?: DriverUpdateManyWithoutUserNestedInput
    conductors?: ConductorUpdateManyWithoutUserNestedInput
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
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    conductors?: ConductorUncheckedUpdateManyWithoutUserNestedInput
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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
  }

  export type BusCreateOrConnectWithoutTicketsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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
  }

  export type DriverCreateWithoutUserInput = {
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutUserInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
  }

  export type DriverCreateManyUserInputEnvelope = {
    data: DriverCreateManyUserInput | DriverCreateManyUserInput[]
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
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConductorCreateWithoutUserInput = {
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorCreateOrConnectWithoutUserInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput>
  }

  export type ConductorCreateManyUserInputEnvelope = {
    data: ConductorCreateManyUserInput | ConductorCreateManyUserInput[]
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
    driver?: DriverCreateNestedOneWithoutBusesInput
    conductor?: ConductorCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
    packages?: PackageCreateNestedManyWithoutBusInput
    dailyReports?: DailyReportCreateNestedManyWithoutBusInput
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

  export type DriverUpsertWithWhereUniqueWithoutUserInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutUserInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
  }

  export type DriverUpdateManyWithWhereWithoutUserInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutUserInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: IntFilter<"Driver"> | number
    user_id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    license_number?: StringFilter<"Driver"> | string
    license_expiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    experience_years?: IntFilter<"Driver"> | number
    address?: StringNullableFilter<"Driver"> | string | null
    emergency_contact?: StringNullableFilter<"Driver"> | string | null
    active?: BoolFilter<"Driver"> | boolean
    created_at?: DateTimeFilter<"Driver"> | Date | string
    updated_at?: DateTimeFilter<"Driver"> | Date | string
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

  export type ConductorUpsertWithWhereUniqueWithoutUserInput = {
    where: ConductorWhereUniqueInput
    update: XOR<ConductorUpdateWithoutUserInput, ConductorUncheckedUpdateWithoutUserInput>
    create: XOR<ConductorCreateWithoutUserInput, ConductorUncheckedCreateWithoutUserInput>
  }

  export type ConductorUpdateWithWhereUniqueWithoutUserInput = {
    where: ConductorWhereUniqueInput
    data: XOR<ConductorUpdateWithoutUserInput, ConductorUncheckedUpdateWithoutUserInput>
  }

  export type ConductorUpdateManyWithWhereWithoutUserInput = {
    where: ConductorScalarWhereInput
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyWithoutUserInput>
  }

  export type ConductorScalarWhereInput = {
    AND?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
    OR?: ConductorScalarWhereInput[]
    NOT?: ConductorScalarWhereInput | ConductorScalarWhereInput[]
    id?: IntFilter<"Conductor"> | number
    user_id?: IntFilter<"Conductor"> | number
    name?: StringFilter<"Conductor"> | string
    phone?: StringFilter<"Conductor"> | string
    experience_years?: IntFilter<"Conductor"> | number
    address?: StringNullableFilter<"Conductor"> | string | null
    emergency_contact?: StringNullableFilter<"Conductor"> | string | null
    active?: BoolFilter<"Conductor"> | boolean
    created_at?: DateTimeFilter<"Conductor"> | Date | string
    updated_at?: DateTimeFilter<"Conductor"> | Date | string
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
    drivers?: DriverCreateNestedManyWithoutUserInput
    routes?: RouteCreateNestedManyWithoutUserInput
    conductors?: ConductorCreateNestedManyWithoutUserInput
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
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    conductors?: ConductorUncheckedCreateNestedManyWithoutUserInput
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
    drivers?: DriverUpdateManyWithoutUserNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    conductors?: ConductorUpdateManyWithoutUserNestedInput
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
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    conductors?: ConductorUncheckedUpdateManyWithoutUserNestedInput
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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

  export type DriverCreateManyUserInput = {
    id?: number
    name: string
    phone: string
    license_number: string
    license_expiry?: Date | string | null
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
    active?: boolean
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

  export type ConductorCreateManyUserInput = {
    id?: number
    name: string
    phone: string
    experience_years?: number
    address?: string | null
    emergency_contact?: string | null
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

  export type DriverUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    license_number?: StringFieldUpdateOperationsInput | string
    license_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
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

  export type ConductorUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    experience_years?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null
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
    driver?: DriverUpdateOneWithoutBusesNestedInput
    conductor?: ConductorUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
    packages?: PackageUpdateManyWithoutBusNestedInput
    dailyReports?: DailyReportUpdateManyWithoutBusNestedInput
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