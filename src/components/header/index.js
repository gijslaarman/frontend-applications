import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
		<header class={style.header}>
			<Link href="/"><h1>Kindveilig Thuis</h1></Link>
			<nav>
			</nav>
		</header>
)
 
export default Header;