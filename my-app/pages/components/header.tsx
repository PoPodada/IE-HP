import Link from "next/link";
export const Header = () => {
  return (
    <header className="xl">
      <nav className="lg">
        <ul className="flex space-x-20 justify-center text-CBL text-4xl font-bold items-center h-20">
          <List Name="Home" href="/Home"/>
          <List Name="About" href="/About"/>
          <List Name="Activities" href="/Activities"/>
          <List Name="Contact" href="/Contact"/>
        </ul>
      </nav>
    </header>
  );
};
interface ListProps{
    Name:string;
    href:string;
}
export const List:React.FC<ListProps> = ({Name,href}) => {
    return (
      <li>
        <Link href={href} className="hover:opacity-70 transition duration-500 ease-in-out">{Name}</Link>
      </li>
    );
  };