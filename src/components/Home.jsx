import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Search from "./Search";
import SingleJob from "./SingleJob";

import { connect } from "react-redux";
import { getJobsAction } from "../redux/actions";
const mapStateToProps = (state) => ({
  jobsInStock: state.jobs.jobsArray,
});
const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(getJobsAction());
  },
});
const Home = ({ fetchJobs, jobsInStock }) => {
  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      
      <Row>
        <Search />
      </Row>
      <Row md={4} xs={1}>
        {jobsInStock &&
          jobsInStock.map((job) => <SingleJob job={job} key={job._id} />)}
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
