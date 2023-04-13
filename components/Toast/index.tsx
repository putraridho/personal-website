import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import style from "./style.module.sass";

export function Toast(): React.ReactElement {
	return (
		<ToastContainer
			progressClassName={"PROGRESS_CLASSNAME"}
			toastClassName={style.toast}
			className={style.container}
			bodyClassName={style.body}
			closeButton={false}
			position="bottom-center"
			autoClose={1000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover={false}
			theme="light"
		/>
	);
}
