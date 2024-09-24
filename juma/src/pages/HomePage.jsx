import Hero from "../components/Hero";

import JobListings from "../components/JobListings";
//import ViewAllJobs from "../components/ViewAllJobs";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <JobListings isHome={true} />
    </>
  );
};

export default HomePage;
