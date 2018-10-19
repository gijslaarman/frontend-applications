import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
		<header class={style.header}>
			<Link href="/"><h1>Kindveilig Thuis</h1></Link>
			<nav>
				<Link href="/info">Informatie</Link>
			</nav>
		</header>
)
 
export default Header;