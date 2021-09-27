// Import libraries
import M from "materialize-css";
import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// Import files and functions
import { actionCreators } from "./redux/actions";
import isEmpty from "./utilities/isEmpty";
// Import components
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Task from "./components/Task";
import TaskModal from "./components/TaskModal";
import JobModal from "./components/JobModal";
import Loader from "./components/Loader";
import DeleteJobPrompt from "./components/DeleteJobPrompt";

function App() {
  // Redux state
  const dispatch = useDispatch();
  const { retrieveTasks, startTasks, finishTasks } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const fetched_tasks = useSelector((state) => state.tasks.tasks);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const filtered_tasks = useSelector((state) => state.tasks.filtered);
  const selected = useSelector((state) => state.jobs.selected_job);

  // React state
  const [tasks, setTasks] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    startTasks();
    axios
      .get("/routes/api/tasks/")
      .then((res) => {
        if (!isEmpty(res.data.tasks)) {
          retrieveTasks(res.data.tasks);
          M.toast({ html: res.data.msg });
          finishTasks();
        }
      })
      .catch((err) => {
        M.toast({ html: err });
      });

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selected) {
      setTasks(filtered_tasks);
    } else {
      setTasks(fetched_tasks);
    }
  }, [filtered_tasks, fetched_tasks, selected]);
  // Main
  return (
    <section className="dashboard">
      <Sidebar time={now} />
      <Main>
        {!isLoading ? (
          tasks.map((task) => <Task key={task._id} task={task} time={now} />)
        ) : (
          <Loader />
        )}
      </Main>
      <TaskModal />
      <JobModal />
      <DeleteJobPrompt />
    </section>
  );
}

export default App;
