
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Surah
 * 
 */
export type Surah = $Result.DefaultSelection<Prisma.$SurahPayload>
/**
 * Model Ayah
 * 
 */
export type Ayah = $Result.DefaultSelection<Prisma.$AyahPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Surahs
 * const surahs = await prisma.surah.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Surahs
   * const surahs = await prisma.surah.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.surah`: Exposes CRUD operations for the **Surah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surahs
    * const surahs = await prisma.surah.findMany()
    * ```
    */
  get surah(): Prisma.SurahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayah`: Exposes CRUD operations for the **Ayah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayahs
    * const ayahs = await prisma.ayah.findMany()
    * ```
    */
  get ayah(): Prisma.AyahDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Surah: 'Surah',
    Ayah: 'Ayah'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "surah" | "ayah"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Surah: {
        payload: Prisma.$SurahPayload<ExtArgs>
        fields: Prisma.SurahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findFirst: {
            args: Prisma.SurahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findMany: {
            args: Prisma.SurahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          create: {
            args: Prisma.SurahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          createMany: {
            args: Prisma.SurahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          delete: {
            args: Prisma.SurahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          update: {
            args: Prisma.SurahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          deleteMany: {
            args: Prisma.SurahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          upsert: {
            args: Prisma.SurahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          aggregate: {
            args: Prisma.SurahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurah>
          }
          groupBy: {
            args: Prisma.SurahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurahGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurahCountArgs<ExtArgs>
            result: $Utils.Optional<SurahCountAggregateOutputType> | number
          }
        }
      }
      Ayah: {
        payload: Prisma.$AyahPayload<ExtArgs>
        fields: Prisma.AyahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findFirst: {
            args: Prisma.AyahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findMany: {
            args: Prisma.AyahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          create: {
            args: Prisma.AyahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          createMany: {
            args: Prisma.AyahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AyahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          delete: {
            args: Prisma.AyahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          update: {
            args: Prisma.AyahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          deleteMany: {
            args: Prisma.AyahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AyahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          upsert: {
            args: Prisma.AyahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          aggregate: {
            args: Prisma.AyahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyah>
          }
          groupBy: {
            args: Prisma.AyahGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyahGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyahCountArgs<ExtArgs>
            result: $Utils.Optional<AyahCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    surah?: SurahOmit
    ayah?: AyahOmit
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
   * Count Type SurahCountOutputType
   */

  export type SurahCountOutputType = {
    ayahs: number
  }

  export type SurahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayahs?: boolean | SurahCountOutputTypeCountAyahsArgs
  }

  // Custom InputTypes
  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahCountOutputType
     */
    select?: SurahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeCountAyahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Surah
   */

  export type AggregateSurah = {
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  export type SurahAvgAggregateOutputType = {
    id: number | null
    ayahCount: number | null
  }

  export type SurahSumAggregateOutputType = {
    id: number | null
    ayahCount: number | null
  }

  export type SurahMinAggregateOutputType = {
    id: number | null
    nameArabic: string | null
    nameEnglish: string | null
    nameMeaning: string | null
    revelation: string | null
    ayahCount: number | null
  }

  export type SurahMaxAggregateOutputType = {
    id: number | null
    nameArabic: string | null
    nameEnglish: string | null
    nameMeaning: string | null
    revelation: string | null
    ayahCount: number | null
  }

  export type SurahCountAggregateOutputType = {
    id: number
    nameArabic: number
    nameEnglish: number
    nameMeaning: number
    revelation: number
    ayahCount: number
    _all: number
  }


  export type SurahAvgAggregateInputType = {
    id?: true
    ayahCount?: true
  }

  export type SurahSumAggregateInputType = {
    id?: true
    ayahCount?: true
  }

  export type SurahMinAggregateInputType = {
    id?: true
    nameArabic?: true
    nameEnglish?: true
    nameMeaning?: true
    revelation?: true
    ayahCount?: true
  }

  export type SurahMaxAggregateInputType = {
    id?: true
    nameArabic?: true
    nameEnglish?: true
    nameMeaning?: true
    revelation?: true
    ayahCount?: true
  }

  export type SurahCountAggregateInputType = {
    id?: true
    nameArabic?: true
    nameEnglish?: true
    nameMeaning?: true
    revelation?: true
    ayahCount?: true
    _all?: true
  }

  export type SurahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surah to aggregate.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surahs
    **/
    _count?: true | SurahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurahMaxAggregateInputType
  }

  export type GetSurahAggregateType<T extends SurahAggregateArgs> = {
        [P in keyof T & keyof AggregateSurah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurah[P]>
      : GetScalarType<T[P], AggregateSurah[P]>
  }




  export type SurahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurahWhereInput
    orderBy?: SurahOrderByWithAggregationInput | SurahOrderByWithAggregationInput[]
    by: SurahScalarFieldEnum[] | SurahScalarFieldEnum
    having?: SurahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurahCountAggregateInputType | true
    _avg?: SurahAvgAggregateInputType
    _sum?: SurahSumAggregateInputType
    _min?: SurahMinAggregateInputType
    _max?: SurahMaxAggregateInputType
  }

  export type SurahGroupByOutputType = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  type GetSurahGroupByPayload<T extends SurahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurahGroupByOutputType[P]>
            : GetScalarType<T[P], SurahGroupByOutputType[P]>
        }
      >
    >


  export type SurahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameArabic?: boolean
    nameEnglish?: boolean
    nameMeaning?: boolean
    revelation?: boolean
    ayahCount?: boolean
    ayahs?: boolean | Surah$ayahsArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameArabic?: boolean
    nameEnglish?: boolean
    nameMeaning?: boolean
    revelation?: boolean
    ayahCount?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameArabic?: boolean
    nameEnglish?: boolean
    nameMeaning?: boolean
    revelation?: boolean
    ayahCount?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectScalar = {
    id?: boolean
    nameArabic?: boolean
    nameEnglish?: boolean
    nameMeaning?: boolean
    revelation?: boolean
    ayahCount?: boolean
  }

  export type SurahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameArabic" | "nameEnglish" | "nameMeaning" | "revelation" | "ayahCount", ExtArgs["result"]["surah"]>
  export type SurahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayahs?: boolean | Surah$ayahsArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SurahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SurahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surah"
    objects: {
      ayahs: Prisma.$AyahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameArabic: string
      nameEnglish: string
      nameMeaning: string
      revelation: string
      ayahCount: number
    }, ExtArgs["result"]["surah"]>
    composites: {}
  }

  type SurahGetPayload<S extends boolean | null | undefined | SurahDefaultArgs> = $Result.GetResult<Prisma.$SurahPayload, S>

  type SurahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurahCountAggregateInputType | true
    }

  export interface SurahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surah'], meta: { name: 'Surah' } }
    /**
     * Find zero or one Surah that matches the filter.
     * @param {SurahFindUniqueArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurahFindUniqueArgs>(args: SelectSubset<T, SurahFindUniqueArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurahFindUniqueOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurahFindUniqueOrThrowArgs>(args: SelectSubset<T, SurahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurahFindFirstArgs>(args?: SelectSubset<T, SurahFindFirstArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurahFindFirstOrThrowArgs>(args?: SelectSubset<T, SurahFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surahs
     * const surahs = await prisma.surah.findMany()
     * 
     * // Get first 10 Surahs
     * const surahs = await prisma.surah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surahWithIdOnly = await prisma.surah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurahFindManyArgs>(args?: SelectSubset<T, SurahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surah.
     * @param {SurahCreateArgs} args - Arguments to create a Surah.
     * @example
     * // Create one Surah
     * const Surah = await prisma.surah.create({
     *   data: {
     *     // ... data to create a Surah
     *   }
     * })
     * 
     */
    create<T extends SurahCreateArgs>(args: SelectSubset<T, SurahCreateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surahs.
     * @param {SurahCreateManyArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurahCreateManyArgs>(args?: SelectSubset<T, SurahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surahs and returns the data saved in the database.
     * @param {SurahCreateManyAndReturnArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurahCreateManyAndReturnArgs>(args?: SelectSubset<T, SurahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Surah.
     * @param {SurahDeleteArgs} args - Arguments to delete one Surah.
     * @example
     * // Delete one Surah
     * const Surah = await prisma.surah.delete({
     *   where: {
     *     // ... filter to delete one Surah
     *   }
     * })
     * 
     */
    delete<T extends SurahDeleteArgs>(args: SelectSubset<T, SurahDeleteArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surah.
     * @param {SurahUpdateArgs} args - Arguments to update one Surah.
     * @example
     * // Update one Surah
     * const surah = await prisma.surah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurahUpdateArgs>(args: SelectSubset<T, SurahUpdateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surahs.
     * @param {SurahDeleteManyArgs} args - Arguments to filter Surahs to delete.
     * @example
     * // Delete a few Surahs
     * const { count } = await prisma.surah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurahDeleteManyArgs>(args?: SelectSubset<T, SurahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurahUpdateManyArgs>(args: SelectSubset<T, SurahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs and returns the data updated in the database.
     * @param {SurahUpdateManyAndReturnArgs} args - Arguments to update many Surahs.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurahUpdateManyAndReturnArgs>(args: SelectSubset<T, SurahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Surah.
     * @param {SurahUpsertArgs} args - Arguments to update or create a Surah.
     * @example
     * // Update or create a Surah
     * const surah = await prisma.surah.upsert({
     *   create: {
     *     // ... data to create a Surah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surah we want to update
     *   }
     * })
     */
    upsert<T extends SurahUpsertArgs>(args: SelectSubset<T, SurahUpsertArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahCountArgs} args - Arguments to filter Surahs to count.
     * @example
     * // Count the number of Surahs
     * const count = await prisma.surah.count({
     *   where: {
     *     // ... the filter for the Surahs we want to count
     *   }
     * })
    **/
    count<T extends SurahCountArgs>(
      args?: Subset<T, SurahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurahAggregateArgs>(args: Subset<T, SurahAggregateArgs>): Prisma.PrismaPromise<GetSurahAggregateType<T>>

    /**
     * Group by Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahGroupByArgs} args - Group by arguments.
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
      T extends SurahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurahGroupByArgs['orderBy'] }
        : { orderBy?: SurahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surah model
   */
  readonly fields: SurahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayahs<T extends Surah$ayahsArgs<ExtArgs> = {}>(args?: Subset<T, Surah$ayahsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Surah model
   */
  interface SurahFieldRefs {
    readonly id: FieldRef<"Surah", 'Int'>
    readonly nameArabic: FieldRef<"Surah", 'String'>
    readonly nameEnglish: FieldRef<"Surah", 'String'>
    readonly nameMeaning: FieldRef<"Surah", 'String'>
    readonly revelation: FieldRef<"Surah", 'String'>
    readonly ayahCount: FieldRef<"Surah", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Surah findUnique
   */
  export type SurahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findUniqueOrThrow
   */
  export type SurahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findFirst
   */
  export type SurahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findFirstOrThrow
   */
  export type SurahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findMany
   */
  export type SurahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surahs to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah create
   */
  export type SurahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to create a Surah.
     */
    data: XOR<SurahCreateInput, SurahUncheckedCreateInput>
  }

  /**
   * Surah createMany
   */
  export type SurahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah createManyAndReturn
   */
  export type SurahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah update
   */
  export type SurahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to update a Surah.
     */
    data: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
    /**
     * Choose, which Surah to update.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah updateMany
   */
  export type SurahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah updateManyAndReturn
   */
  export type SurahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah upsert
   */
  export type SurahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The filter to search for the Surah to update in case it exists.
     */
    where: SurahWhereUniqueInput
    /**
     * In case the Surah found by the `where` argument doesn't exist, create a new Surah with this data.
     */
    create: XOR<SurahCreateInput, SurahUncheckedCreateInput>
    /**
     * In case the Surah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
  }

  /**
   * Surah delete
   */
  export type SurahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter which Surah to delete.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah deleteMany
   */
  export type SurahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surahs to delete
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to delete.
     */
    limit?: number
  }

  /**
   * Surah.ayahs
   */
  export type Surah$ayahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    cursor?: AyahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Surah without action
   */
  export type SurahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
  }


  /**
   * Model Ayah
   */

  export type AggregateAyah = {
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  export type AyahAvgAggregateOutputType = {
    id: number | null
    surahId: number | null
    ayahNumber: number | null
  }

  export type AyahSumAggregateOutputType = {
    id: number | null
    surahId: number | null
    ayahNumber: number | null
  }

  export type AyahMinAggregateOutputType = {
    id: number | null
    surahId: number | null
    ayahNumber: number | null
    arabic: string | null
    translation: string | null
  }

  export type AyahMaxAggregateOutputType = {
    id: number | null
    surahId: number | null
    ayahNumber: number | null
    arabic: string | null
    translation: string | null
  }

  export type AyahCountAggregateOutputType = {
    id: number
    surahId: number
    ayahNumber: number
    arabic: number
    translation: number
    _all: number
  }


  export type AyahAvgAggregateInputType = {
    id?: true
    surahId?: true
    ayahNumber?: true
  }

  export type AyahSumAggregateInputType = {
    id?: true
    surahId?: true
    ayahNumber?: true
  }

  export type AyahMinAggregateInputType = {
    id?: true
    surahId?: true
    ayahNumber?: true
    arabic?: true
    translation?: true
  }

  export type AyahMaxAggregateInputType = {
    id?: true
    surahId?: true
    ayahNumber?: true
    arabic?: true
    translation?: true
  }

  export type AyahCountAggregateInputType = {
    id?: true
    surahId?: true
    ayahNumber?: true
    arabic?: true
    translation?: true
    _all?: true
  }

  export type AyahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayah to aggregate.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayahs
    **/
    _count?: true | AyahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyahMaxAggregateInputType
  }

  export type GetAyahAggregateType<T extends AyahAggregateArgs> = {
        [P in keyof T & keyof AggregateAyah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyah[P]>
      : GetScalarType<T[P], AggregateAyah[P]>
  }




  export type AyahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithAggregationInput | AyahOrderByWithAggregationInput[]
    by: AyahScalarFieldEnum[] | AyahScalarFieldEnum
    having?: AyahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyahCountAggregateInputType | true
    _avg?: AyahAvgAggregateInputType
    _sum?: AyahSumAggregateInputType
    _min?: AyahMinAggregateInputType
    _max?: AyahMaxAggregateInputType
  }

  export type AyahGroupByOutputType = {
    id: number
    surahId: number
    ayahNumber: number
    arabic: string
    translation: string
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  type GetAyahGroupByPayload<T extends AyahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyahGroupByOutputType[P]>
            : GetScalarType<T[P], AyahGroupByOutputType[P]>
        }
      >
    >


  export type AyahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surahId?: boolean
    ayahNumber?: boolean
    arabic?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surahId?: boolean
    ayahNumber?: boolean
    arabic?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surahId?: boolean
    ayahNumber?: boolean
    arabic?: boolean
    translation?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectScalar = {
    id?: boolean
    surahId?: boolean
    ayahNumber?: boolean
    arabic?: boolean
    translation?: boolean
  }

  export type AyahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surahId" | "ayahNumber" | "arabic" | "translation", ExtArgs["result"]["ayah"]>
  export type AyahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }

  export type $AyahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayah"
    objects: {
      surah: Prisma.$SurahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      surahId: number
      ayahNumber: number
      arabic: string
      translation: string
    }, ExtArgs["result"]["ayah"]>
    composites: {}
  }

  type AyahGetPayload<S extends boolean | null | undefined | AyahDefaultArgs> = $Result.GetResult<Prisma.$AyahPayload, S>

  type AyahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyahCountAggregateInputType | true
    }

  export interface AyahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayah'], meta: { name: 'Ayah' } }
    /**
     * Find zero or one Ayah that matches the filter.
     * @param {AyahFindUniqueArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyahFindUniqueArgs>(args: SelectSubset<T, AyahFindUniqueArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ayah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyahFindUniqueOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyahFindUniqueOrThrowArgs>(args: SelectSubset<T, AyahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyahFindFirstArgs>(args?: SelectSubset<T, AyahFindFirstArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyahFindFirstOrThrowArgs>(args?: SelectSubset<T, AyahFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ayahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayahs
     * const ayahs = await prisma.ayah.findMany()
     * 
     * // Get first 10 Ayahs
     * const ayahs = await prisma.ayah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayahWithIdOnly = await prisma.ayah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyahFindManyArgs>(args?: SelectSubset<T, AyahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ayah.
     * @param {AyahCreateArgs} args - Arguments to create a Ayah.
     * @example
     * // Create one Ayah
     * const Ayah = await prisma.ayah.create({
     *   data: {
     *     // ... data to create a Ayah
     *   }
     * })
     * 
     */
    create<T extends AyahCreateArgs>(args: SelectSubset<T, AyahCreateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ayahs.
     * @param {AyahCreateManyArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyahCreateManyArgs>(args?: SelectSubset<T, AyahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ayahs and returns the data saved in the database.
     * @param {AyahCreateManyAndReturnArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AyahCreateManyAndReturnArgs>(args?: SelectSubset<T, AyahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ayah.
     * @param {AyahDeleteArgs} args - Arguments to delete one Ayah.
     * @example
     * // Delete one Ayah
     * const Ayah = await prisma.ayah.delete({
     *   where: {
     *     // ... filter to delete one Ayah
     *   }
     * })
     * 
     */
    delete<T extends AyahDeleteArgs>(args: SelectSubset<T, AyahDeleteArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ayah.
     * @param {AyahUpdateArgs} args - Arguments to update one Ayah.
     * @example
     * // Update one Ayah
     * const ayah = await prisma.ayah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyahUpdateArgs>(args: SelectSubset<T, AyahUpdateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ayahs.
     * @param {AyahDeleteManyArgs} args - Arguments to filter Ayahs to delete.
     * @example
     * // Delete a few Ayahs
     * const { count } = await prisma.ayah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyahDeleteManyArgs>(args?: SelectSubset<T, AyahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyahUpdateManyArgs>(args: SelectSubset<T, AyahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs and returns the data updated in the database.
     * @param {AyahUpdateManyAndReturnArgs} args - Arguments to update many Ayahs.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AyahUpdateManyAndReturnArgs>(args: SelectSubset<T, AyahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ayah.
     * @param {AyahUpsertArgs} args - Arguments to update or create a Ayah.
     * @example
     * // Update or create a Ayah
     * const ayah = await prisma.ayah.upsert({
     *   create: {
     *     // ... data to create a Ayah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayah we want to update
     *   }
     * })
     */
    upsert<T extends AyahUpsertArgs>(args: SelectSubset<T, AyahUpsertArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahCountArgs} args - Arguments to filter Ayahs to count.
     * @example
     * // Count the number of Ayahs
     * const count = await prisma.ayah.count({
     *   where: {
     *     // ... the filter for the Ayahs we want to count
     *   }
     * })
    **/
    count<T extends AyahCountArgs>(
      args?: Subset<T, AyahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AyahAggregateArgs>(args: Subset<T, AyahAggregateArgs>): Prisma.PrismaPromise<GetAyahAggregateType<T>>

    /**
     * Group by Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahGroupByArgs} args - Group by arguments.
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
      T extends AyahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyahGroupByArgs['orderBy'] }
        : { orderBy?: AyahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AyahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayah model
   */
  readonly fields: AyahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surah<T extends SurahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurahDefaultArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ayah model
   */
  interface AyahFieldRefs {
    readonly id: FieldRef<"Ayah", 'Int'>
    readonly surahId: FieldRef<"Ayah", 'Int'>
    readonly ayahNumber: FieldRef<"Ayah", 'Int'>
    readonly arabic: FieldRef<"Ayah", 'String'>
    readonly translation: FieldRef<"Ayah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ayah findUnique
   */
  export type AyahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findUniqueOrThrow
   */
  export type AyahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findFirst
   */
  export type AyahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findFirstOrThrow
   */
  export type AyahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findMany
   */
  export type AyahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayahs to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah create
   */
  export type AyahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to create a Ayah.
     */
    data: XOR<AyahCreateInput, AyahUncheckedCreateInput>
  }

  /**
   * Ayah createMany
   */
  export type AyahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayah createManyAndReturn
   */
  export type AyahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah update
   */
  export type AyahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to update a Ayah.
     */
    data: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
    /**
     * Choose, which Ayah to update.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah updateMany
   */
  export type AyahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
  }

  /**
   * Ayah updateManyAndReturn
   */
  export type AyahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah upsert
   */
  export type AyahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The filter to search for the Ayah to update in case it exists.
     */
    where: AyahWhereUniqueInput
    /**
     * In case the Ayah found by the `where` argument doesn't exist, create a new Ayah with this data.
     */
    create: XOR<AyahCreateInput, AyahUncheckedCreateInput>
    /**
     * In case the Ayah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
  }

  /**
   * Ayah delete
   */
  export type AyahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter which Ayah to delete.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah deleteMany
   */
  export type AyahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayahs to delete
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to delete.
     */
    limit?: number
  }

  /**
   * Ayah without action
   */
  export type AyahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
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


  export const SurahScalarFieldEnum: {
    id: 'id',
    nameArabic: 'nameArabic',
    nameEnglish: 'nameEnglish',
    nameMeaning: 'nameMeaning',
    revelation: 'revelation',
    ayahCount: 'ayahCount'
  };

  export type SurahScalarFieldEnum = (typeof SurahScalarFieldEnum)[keyof typeof SurahScalarFieldEnum]


  export const AyahScalarFieldEnum: {
    id: 'id',
    surahId: 'surahId',
    ayahNumber: 'ayahNumber',
    arabic: 'arabic',
    translation: 'translation'
  };

  export type AyahScalarFieldEnum = (typeof AyahScalarFieldEnum)[keyof typeof AyahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SurahWhereInput = {
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    id?: IntFilter<"Surah"> | number
    nameArabic?: StringFilter<"Surah"> | string
    nameEnglish?: StringFilter<"Surah"> | string
    nameMeaning?: StringFilter<"Surah"> | string
    revelation?: StringFilter<"Surah"> | string
    ayahCount?: IntFilter<"Surah"> | number
    ayahs?: AyahListRelationFilter
  }

  export type SurahOrderByWithRelationInput = {
    id?: SortOrder
    nameArabic?: SortOrder
    nameEnglish?: SortOrder
    nameMeaning?: SortOrder
    revelation?: SortOrder
    ayahCount?: SortOrder
    ayahs?: AyahOrderByRelationAggregateInput
  }

  export type SurahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    nameArabic?: StringFilter<"Surah"> | string
    nameEnglish?: StringFilter<"Surah"> | string
    nameMeaning?: StringFilter<"Surah"> | string
    revelation?: StringFilter<"Surah"> | string
    ayahCount?: IntFilter<"Surah"> | number
    ayahs?: AyahListRelationFilter
  }, "id">

  export type SurahOrderByWithAggregationInput = {
    id?: SortOrder
    nameArabic?: SortOrder
    nameEnglish?: SortOrder
    nameMeaning?: SortOrder
    revelation?: SortOrder
    ayahCount?: SortOrder
    _count?: SurahCountOrderByAggregateInput
    _avg?: SurahAvgOrderByAggregateInput
    _max?: SurahMaxOrderByAggregateInput
    _min?: SurahMinOrderByAggregateInput
    _sum?: SurahSumOrderByAggregateInput
  }

  export type SurahScalarWhereWithAggregatesInput = {
    AND?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    OR?: SurahScalarWhereWithAggregatesInput[]
    NOT?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Surah"> | number
    nameArabic?: StringWithAggregatesFilter<"Surah"> | string
    nameEnglish?: StringWithAggregatesFilter<"Surah"> | string
    nameMeaning?: StringWithAggregatesFilter<"Surah"> | string
    revelation?: StringWithAggregatesFilter<"Surah"> | string
    ayahCount?: IntWithAggregatesFilter<"Surah"> | number
  }

  export type AyahWhereInput = {
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    id?: IntFilter<"Ayah"> | number
    surahId?: IntFilter<"Ayah"> | number
    ayahNumber?: IntFilter<"Ayah"> | number
    arabic?: StringFilter<"Ayah"> | string
    translation?: StringFilter<"Ayah"> | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }

  export type AyahOrderByWithRelationInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
    arabic?: SortOrder
    translation?: SortOrder
    surah?: SurahOrderByWithRelationInput
  }

  export type AyahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    surahId_ayahNumber?: AyahSurahIdAyahNumberCompoundUniqueInput
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    surahId?: IntFilter<"Ayah"> | number
    ayahNumber?: IntFilter<"Ayah"> | number
    arabic?: StringFilter<"Ayah"> | string
    translation?: StringFilter<"Ayah"> | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }, "id" | "surahId_ayahNumber">

  export type AyahOrderByWithAggregationInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
    arabic?: SortOrder
    translation?: SortOrder
    _count?: AyahCountOrderByAggregateInput
    _avg?: AyahAvgOrderByAggregateInput
    _max?: AyahMaxOrderByAggregateInput
    _min?: AyahMinOrderByAggregateInput
    _sum?: AyahSumOrderByAggregateInput
  }

  export type AyahScalarWhereWithAggregatesInput = {
    AND?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    OR?: AyahScalarWhereWithAggregatesInput[]
    NOT?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ayah"> | number
    surahId?: IntWithAggregatesFilter<"Ayah"> | number
    ayahNumber?: IntWithAggregatesFilter<"Ayah"> | number
    arabic?: StringWithAggregatesFilter<"Ayah"> | string
    translation?: StringWithAggregatesFilter<"Ayah"> | string
  }

  export type SurahCreateInput = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
    ayahs?: AyahCreateNestedManyWithoutSurahInput
  }

  export type SurahUncheckedCreateInput = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
    ayahs?: AyahUncheckedCreateNestedManyWithoutSurahInput
  }

  export type SurahUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
    ayahs?: AyahUpdateManyWithoutSurahNestedInput
  }

  export type SurahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
    ayahs?: AyahUncheckedUpdateManyWithoutSurahNestedInput
  }

  export type SurahCreateManyInput = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
  }

  export type SurahUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
  }

  export type SurahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
  }

  export type AyahCreateInput = {
    ayahNumber: number
    arabic: string
    translation: string
    surah: SurahCreateNestedOneWithoutAyahsInput
  }

  export type AyahUncheckedCreateInput = {
    id?: number
    surahId: number
    ayahNumber: number
    arabic: string
    translation: string
  }

  export type AyahUpdateInput = {
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    surah?: SurahUpdateOneRequiredWithoutAyahsNestedInput
  }

  export type AyahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    surahId?: IntFieldUpdateOperationsInput | number
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyahCreateManyInput = {
    id?: number
    surahId: number
    ayahNumber: number
    arabic: string
    translation: string
  }

  export type AyahUpdateManyMutationInput = {
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    surahId?: IntFieldUpdateOperationsInput | number
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AyahListRelationFilter = {
    every?: AyahWhereInput
    some?: AyahWhereInput
    none?: AyahWhereInput
  }

  export type AyahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurahCountOrderByAggregateInput = {
    id?: SortOrder
    nameArabic?: SortOrder
    nameEnglish?: SortOrder
    nameMeaning?: SortOrder
    revelation?: SortOrder
    ayahCount?: SortOrder
  }

  export type SurahAvgOrderByAggregateInput = {
    id?: SortOrder
    ayahCount?: SortOrder
  }

  export type SurahMaxOrderByAggregateInput = {
    id?: SortOrder
    nameArabic?: SortOrder
    nameEnglish?: SortOrder
    nameMeaning?: SortOrder
    revelation?: SortOrder
    ayahCount?: SortOrder
  }

  export type SurahMinOrderByAggregateInput = {
    id?: SortOrder
    nameArabic?: SortOrder
    nameEnglish?: SortOrder
    nameMeaning?: SortOrder
    revelation?: SortOrder
    ayahCount?: SortOrder
  }

  export type SurahSumOrderByAggregateInput = {
    id?: SortOrder
    ayahCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SurahScalarRelationFilter = {
    is?: SurahWhereInput
    isNot?: SurahWhereInput
  }

  export type AyahSurahIdAyahNumberCompoundUniqueInput = {
    surahId: number
    ayahNumber: number
  }

  export type AyahCountOrderByAggregateInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
    arabic?: SortOrder
    translation?: SortOrder
  }

  export type AyahAvgOrderByAggregateInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
  }

  export type AyahMaxOrderByAggregateInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
    arabic?: SortOrder
    translation?: SortOrder
  }

  export type AyahMinOrderByAggregateInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
    arabic?: SortOrder
    translation?: SortOrder
  }

  export type AyahSumOrderByAggregateInput = {
    id?: SortOrder
    surahId?: SortOrder
    ayahNumber?: SortOrder
  }

  export type AyahCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type AyahUncheckedCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AyahUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutSurahInput | AyahUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutSurahInput | AyahUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutSurahInput | AyahUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type AyahUncheckedUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutSurahInput | AyahUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutSurahInput | AyahUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutSurahInput | AyahUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type SurahCreateNestedOneWithoutAyahsInput = {
    create?: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahsInput
    connect?: SurahWhereUniqueInput
  }

  export type SurahUpdateOneRequiredWithoutAyahsNestedInput = {
    create?: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahsInput
    upsert?: SurahUpsertWithoutAyahsInput
    connect?: SurahWhereUniqueInput
    update?: XOR<XOR<SurahUpdateToOneWithWhereWithoutAyahsInput, SurahUpdateWithoutAyahsInput>, SurahUncheckedUpdateWithoutAyahsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AyahCreateWithoutSurahInput = {
    ayahNumber: number
    arabic: string
    translation: string
  }

  export type AyahUncheckedCreateWithoutSurahInput = {
    id?: number
    ayahNumber: number
    arabic: string
    translation: string
  }

  export type AyahCreateOrConnectWithoutSurahInput = {
    where: AyahWhereUniqueInput
    create: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput>
  }

  export type AyahCreateManySurahInputEnvelope = {
    data: AyahCreateManySurahInput | AyahCreateManySurahInput[]
    skipDuplicates?: boolean
  }

  export type AyahUpsertWithWhereUniqueWithoutSurahInput = {
    where: AyahWhereUniqueInput
    update: XOR<AyahUpdateWithoutSurahInput, AyahUncheckedUpdateWithoutSurahInput>
    create: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput>
  }

  export type AyahUpdateWithWhereUniqueWithoutSurahInput = {
    where: AyahWhereUniqueInput
    data: XOR<AyahUpdateWithoutSurahInput, AyahUncheckedUpdateWithoutSurahInput>
  }

  export type AyahUpdateManyWithWhereWithoutSurahInput = {
    where: AyahScalarWhereInput
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyWithoutSurahInput>
  }

  export type AyahScalarWhereInput = {
    AND?: AyahScalarWhereInput | AyahScalarWhereInput[]
    OR?: AyahScalarWhereInput[]
    NOT?: AyahScalarWhereInput | AyahScalarWhereInput[]
    id?: IntFilter<"Ayah"> | number
    surahId?: IntFilter<"Ayah"> | number
    ayahNumber?: IntFilter<"Ayah"> | number
    arabic?: StringFilter<"Ayah"> | string
    translation?: StringFilter<"Ayah"> | string
  }

  export type SurahCreateWithoutAyahsInput = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
  }

  export type SurahUncheckedCreateWithoutAyahsInput = {
    id: number
    nameArabic: string
    nameEnglish: string
    nameMeaning: string
    revelation: string
    ayahCount: number
  }

  export type SurahCreateOrConnectWithoutAyahsInput = {
    where: SurahWhereUniqueInput
    create: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
  }

  export type SurahUpsertWithoutAyahsInput = {
    update: XOR<SurahUpdateWithoutAyahsInput, SurahUncheckedUpdateWithoutAyahsInput>
    create: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    where?: SurahWhereInput
  }

  export type SurahUpdateToOneWithWhereWithoutAyahsInput = {
    where?: SurahWhereInput
    data: XOR<SurahUpdateWithoutAyahsInput, SurahUncheckedUpdateWithoutAyahsInput>
  }

  export type SurahUpdateWithoutAyahsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
  }

  export type SurahUncheckedUpdateWithoutAyahsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameArabic?: StringFieldUpdateOperationsInput | string
    nameEnglish?: StringFieldUpdateOperationsInput | string
    nameMeaning?: StringFieldUpdateOperationsInput | string
    revelation?: StringFieldUpdateOperationsInput | string
    ayahCount?: IntFieldUpdateOperationsInput | number
  }

  export type AyahCreateManySurahInput = {
    id?: number
    ayahNumber: number
    arabic: string
    translation: string
  }

  export type AyahUpdateWithoutSurahInput = {
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateWithoutSurahInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateManyWithoutSurahInput = {
    id?: IntFieldUpdateOperationsInput | number
    ayahNumber?: IntFieldUpdateOperationsInput | number
    arabic?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
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