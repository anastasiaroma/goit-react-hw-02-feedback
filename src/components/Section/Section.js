import PropTypes from "prop-types";
import s from "./Section.module.css"

export function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Please leave feedback</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};