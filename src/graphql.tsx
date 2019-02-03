export type Maybe<T> = T | null;

/** ordering options when selecting data from "points" */
export interface PointsOrderBy {
  geom?: Maybe<OrderBy>;

  gid?: Maybe<OrderBy>;
}
/** Boolean expression to filter rows from the table "points". All fields are combined with a logical 'AND'. */
export interface PointsBoolExp {
  _and?: Maybe<PointsBoolExp[]>;

  _not?: Maybe<PointsBoolExp>;

  _or?: Maybe<PointsBoolExp[]>;

  geom?: Maybe<GeometryComparisonExp>;

  gid?: Maybe<IntegerComparisonExp>;
}
/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export interface GeometryComparisonExp {
  _eq?: Maybe<Geometry>;

  _gt?: Maybe<Geometry>;

  _gte?: Maybe<Geometry>;

  _in?: Maybe<Geometry[]>;

  _is_null?: Maybe<boolean>;

  _lt?: Maybe<Geometry>;

  _lte?: Maybe<Geometry>;

  _neq?: Maybe<Geometry>;

  _nin?: Maybe<Geometry[]>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Geometry>;
  /** does the column crosses the given geometry value */
  _st_crosses?: Maybe<Geometry>;
  /** is the column within a distance from a geometry value */
  _st_d_within?: Maybe<StDWithinInput>;
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Maybe<Geometry>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Geometry>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Geometry>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Geometry>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Geometry>;
}

export interface StDWithinInput {
  distance: number;

  from: Geometry;
}
/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export interface IntegerComparisonExp {
  _eq?: Maybe<number>;

  _gt?: Maybe<number>;

  _gte?: Maybe<number>;

  _in?: Maybe<number[]>;

  _is_null?: Maybe<boolean>;

  _lt?: Maybe<number>;

  _lte?: Maybe<number>;

  _neq?: Maybe<number>;

  _nin?: Maybe<number[]>;
}
/** input type for inserting data into table "points" */
export interface PointsInsertInput {
  geom?: Maybe<Geometry>;

  gid?: Maybe<number>;
}
/** on conflict condition type for table "points" */
export interface PointsOnConflict {
  constraint: PointsConstraint;

  update_columns: PointsUpdateColumn[];
}
/** input type for incrementing integer columne in table "points" */
export interface PointsIncInput {
  gid?: Maybe<number>;
}
/** input type for updating data in table "points" */
export interface PointsSetInput {
  geom?: Maybe<Geometry>;

  gid?: Maybe<number>;
}
/** order by aggregate values of table "points" */
export interface PointsAggregateOrderBy {
  avg?: Maybe<PointsAvgOrderBy>;

  count?: Maybe<OrderBy>;

  max?: Maybe<PointsMaxOrderBy>;

  min?: Maybe<PointsMinOrderBy>;

  stddev?: Maybe<PointsStddevOrderBy>;

  stddev_pop?: Maybe<PointsStddevPopOrderBy>;

  stddev_samp?: Maybe<PointsStddevSampOrderBy>;

  sum?: Maybe<PointsSumOrderBy>;

  var_pop?: Maybe<PointsVarPopOrderBy>;

  var_samp?: Maybe<PointsVarSampOrderBy>;

  variance?: Maybe<PointsVarianceOrderBy>;
}
/** order by avg() on columns of table "points" */
export interface PointsAvgOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by max() on columns of table "points" */
export interface PointsMaxOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by min() on columns of table "points" */
export interface PointsMinOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by stddev() on columns of table "points" */
export interface PointsStddevOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by stddev_pop() on columns of table "points" */
export interface PointsStddevPopOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by stddev_samp() on columns of table "points" */
export interface PointsStddevSampOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by sum() on columns of table "points" */
export interface PointsSumOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by var_pop() on columns of table "points" */
export interface PointsVarPopOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by var_samp() on columns of table "points" */
export interface PointsVarSampOrderBy {
  gid?: Maybe<OrderBy>;
}
/** order by variance() on columns of table "points" */
export interface PointsVarianceOrderBy {
  gid?: Maybe<OrderBy>;
}
/** input type for inserting array relation for remote table "points" */
export interface PointsArrRelInsertInput {
  data: PointsInsertInput[];

  on_conflict?: Maybe<PointsOnConflict>;
}
/** input type for inserting object relation for remote table "points" */
export interface PointsObjRelInsertInput {
  data: PointsInsertInput;

  on_conflict?: Maybe<PointsOnConflict>;
}
/** select columns of table "points" */
export enum PointsSelectColumn {
  Geom = "geom",
  Gid = "gid"
}
/** column ordering options */
export enum OrderBy {
  Asc = "asc",
  AscNullsFirst = "asc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  Desc = "desc",
  DescNullsFirst = "desc_nulls_first",
  DescNullsLast = "desc_nulls_last"
}
/** unique or primary key constraints on table "points" */
export enum PointsConstraint {
  PointsPkey = "points_pkey"
}
/** update columns of table "points" */
export enum PointsUpdateColumn {
  Geom = "geom",
  Gid = "gid"
}
/** conflict action */
export enum ConflictAction {
  Ignore = "ignore",
  Update = "update"
}

export type Geometry = any;

// ====================================================
// Documents
// ====================================================

export type PointsQueryVariables = {};

export type PointsQueryQuery = {
  __typename?: "Query";

  points: PointsQueryPoints[];
};

export type PointsQueryPoints = {
  __typename?: "points";

  gid: number;

  geom: Maybe<Geometry>;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const PointsQueryDocument = gql`
  query PointsQuery {
    points {
      gid
      geom
    }
  }
`;
export class PointsQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PointsQueryQuery, PointsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<PointsQueryQuery, PointsQueryVariables>
        query={PointsQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type PointsQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<PointsQueryQuery, PointsQueryVariables>
> &
  TChildProps;
export function PointsQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PointsQueryQuery,
        PointsQueryVariables,
        PointsQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    PointsQueryQuery,
    PointsQueryVariables,
    PointsQueryProps<TChildProps>
  >(PointsQueryDocument, operationOptions);
}
