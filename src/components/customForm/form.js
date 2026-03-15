import { useForm } from "./useForm";

export default function Form() {
  const { values, handleChange, reset } = useForm({ name: "", email: "" });

  const submit = () => {
    if (values.name === "" || values.email === "") {
      alert("All input fields are required");
    } else {
      alert("Form Submitted");
      reset();
    }
  };
  return (
    <div>
      <label>Name </label>
      <input
        name="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        name="Email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
