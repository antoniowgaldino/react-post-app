import { useNavigate } from "react-router-dom";
import './Login.css';
import { Usuarios } from "../../usuarios/Usuarios";

export const Login = () => {
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault(); // Corrigido de 'e.preventDefaut' para 'e.preventDefault()'
        const formData = new FormData(e.target);
        const formValues = {
            email: formData.get('email'),
            senha: formData.get('senha')
        };

        // Verificar se o usuário existe e se a senha está correta
        const Usuarios = users.find(u => u.email === formValues.email && u.senha === formValues.senha);

        if (user) {
            // Armazenando os dados do usuário no localStorage
            localStorage.setItem('user', JSON.stringify(user));
            alert('Login realizado com sucesso!');
            navigate('/home');
        } else {
            alert('Login inválido!');
        }

        console.log('Enviou:', formValues);
    };

    return (
        <div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={login}>
                    <img className="mb-4" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/1Artboard%25201%2520copy.png" alt="" width="180" />
                    <h1 className="h3 mb-3 fw-normal">Bem-vindo! Faça o seu login.</h1>

                    <div className="form-floating">
                        <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Seu E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input name="senha" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Sua Senha</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Lembrar meu acesso
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Acessar</button>
                    <p className="mt-5 mb-3 text-body-secondary">© Digital College Fortaleza 2024</p>
                </form>
            </main>
        </div>
    );
};
