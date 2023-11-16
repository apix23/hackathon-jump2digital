import "../styles/form.css";

export function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    const results = JSON.stringify(formJSON);

    console.log(results);
    event.target.reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="school" placeholder="Nombre del colegio" />
        <input type="text" name="teacher" placeholder="Nombre del profesor" />
        <input type="text" name="district" placeholder="Barrio y distrito" />
        <input
          type="text"
          name="classTopic"
          placeholder="asignatura que imparte"
        />
        <input
          type="text"
          name="numberStudents"
          placeholder="Numero de alumnos"
        />
        <button>continuar</button>
      </form>
    </section>
  );
}