import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import style from "./style.module.sass";

export function Toast(): React.ReactElement {
	return (
		<ToastContainer
			toastClassName={style.toast}
			className={style.container}
			bodyClassName={style.body}
			closeButton={false}
			position="top-center"
			autoClose={500}
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
