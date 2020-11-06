import BaseProperty from '../../adapters/property/base-property'
import BaseRecord from '../../adapters/record/base-record'

export type Value = string | number;

export type Equals = {
  $eq: Value;
}

export type NotEquals = {
  $ne: Value;
}

export type GreaterThan = {
  $gt: Value;
}

export type LessThan = {
  $lt: Value;
}

export type GreaterThanOrEquals = {
  $gte: Value;
}

export type LessThanOrEquals = {
  $lte: Value;
}

export type Like = {
  $like: Value;
}

// Linking an issue here, that bugged me; https://github.com/Microsoft/TypeScript/issues/14094
export type Condition = Equals | NotEquals | GreaterThan
  | LessThan | GreaterThanOrEquals | LessThanOrEquals | Like;

export type PropertiesFilter = {
  [property: string]: Condition | Value | PropertiesFilter;
} | Condition;

export type FilterElement = {
  path: string;
  property: BaseProperty;
  condition: Condition;
  populated?: BaseRecord | null;
};

export type FilterElementMap = {
  [key: string]: FilterElement;
}
