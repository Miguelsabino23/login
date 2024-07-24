export default function LoginForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div className='login'>
        <label>Usuário</label>
        <input
          type='email'
          placeholder='Digite seu email'
          style={{ marginBottom: "20px" }}
        />
        <img
          src='/images/person.svg'
          style={{ right: "10rem", position: "absolute", top: "19.3rem" }}
        ></img>
      </div>
      <div className='login'>
        <label>Senha</label>
        <input type='password' placeholder='Digite sua senha' />
        <img
          src='/images/closed.svg'
          style={{
            right: "10rem",
            position: "absolute",
            cursor: "pointer",
            top: "26rem",
          }}
        />
      </div>
    </form>
  );
}
