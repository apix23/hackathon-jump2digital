import "../styles/form.css";
import {useForm} from 'react-hook-form';


export function Form() {
  // const {handleSubmit}  = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   const formJSON = Object.fromEntries(data.entries());
  //   const results = JSON.stringify(formJSON);

  //   console.log(results);
  //   event.target.reset();
  // };

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log(data);
  }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Introduce tus datos </h1>
        <input type="text" name="school" placeholder="Nombre del colegio" {...register('school', {
                      required: true,
                      pattern: /^[a-zA-ZÁ-ú\s]+$/i
                  })} />
                  {errors.school?.type === 'required' && <p> Se require nombre del colegio</p>}
                  {errors.school?.type === 'pattern' && <p> El nombre no es válido</p>}
        <input type="text" name="teacher" placeholder="Nombre del profesor" {...register('teacher', {
                      required: true,
                      pattern: /^[a-zA-ZÁ-ú\s]+$/i
                  })} />
                  {errors.teacher?.type === 'required' && <p> Se require nombre del profesor</p>}
                  {errors.teacher?.type === 'pattern' && <p> El nombre no es válido</p>}
        <input type="text" name="barrio" placeholder="Barrio" />
        <input
          type="text"
          name="classTopic"
          placeholder="Asignatura que imparte"
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
