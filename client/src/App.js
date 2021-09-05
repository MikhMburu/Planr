// Import libraries
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// Import files and functions
import { actionCreators } from "./redux/actions";
// Import components
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Task from "./components/Task";
import TaskModal from "./components/TaskModal";
import JobModal from "./components/JobModal";
import Loader from "./components/Loader";
function App() {
  // Redux state
  const dispatch = useDispatch();
  const { retrieveTasks, wait, done } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const tasks = useSelector((state) => state.tasks.tasks);
  const isLoading = useSelector((state) => state.main.isLoading);
  // React state
  useEffect(() => {
    M.AutoInit();
  }, []);
  useEffect(() => {
    wait();
    axios
      .get("/routes/api/tasks/")
      .then((res) => {
        retrieveTasks(res.data.tasks);
        M.toast({ html: res.data.msg });
        done();
      })
      .catch((err) => {
        M.toast({ html: err });
      });
    // eslint-disable-next-line
  }, []);
  // Main
  return (
    <section className="dashboard">
      <Sidebar />
      <Main>
        {!isLoading ? (
          tasks.map((task) => <Task key={task._id} task={task} />)
        ) : (
          <Loader />
        )}
      </Main>
      <TaskModal />
      <JobModal />
    </section>
  );
}

export default App;
