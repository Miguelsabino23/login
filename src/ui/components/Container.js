import LoginForm from "./LoginForm";
import Button from "./Button";

export default function Container() {
  return (
    <>
      <div className='container'>
        <h1>
          <span style={{ color: "#737373" }}>Bem vindo ao</span>{" "}
          <span style={{ color: "#0078F0" }}>LOGIN</span>
        </h1>
        <p style={{ color: "#737373", opacity: ".6" }}>
          Preencha os dados do login para acessar
        </p>
        <LoginForm></LoginForm>
        <Button></Button>
      </div>
    </>
  );
}
