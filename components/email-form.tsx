import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function EmailForm() {
  return (
    <>
      <form>
        <div className={utilStyles.marginBottom}>
          <label htmlFor="email" className={utilStyles.emailLabel}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={utilStyles.emailInput}
            placeholder="name@email.com"
            required
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
