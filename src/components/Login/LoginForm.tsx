import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={classes.login}>
            <h2>Login</h2>
            <form>
                <div className={classes.formGroup}>
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" id="username" name="username" placeholder="Digite o usuário" title="Informe o nome de usuário" required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a senha" title="Informe a senha do usuário" required />
                </div>
                <Link to="/home" className={classes.link}>
                    <button type="submit" title="Clique para ver os personagens!">Entrar</button>
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;