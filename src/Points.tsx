import React, { Component } from 'react';
import { PointsQueryProps, PointsQueryHOC } from './graphql';

const Points = (props: PointsQueryProps) => {
  const { loading, error, points } = props.data;

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div>
      <em>points.length:</em>
      {points && points.length}
    </div>
  );
};

const withPoints = PointsQueryHOC({ options: {} });

export default withPoints(Points);
