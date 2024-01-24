import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header
      style={{
        background: "#0F1035",
        overflow: "hidden",
        width: "100vw",
        padding: "0 2rem",
      }}
    >

        <Link
          href={"/"}
          style={{
            color: "#DCF2F1",
            textDecoration: "none",
            display: "inline-block",
            margin: "10px 0",
          }}
        >
          {/* <Typography variant="h4">PS</Typography> */}
          <Image src={Logo} alt="Logo" width={150} height={45} style={{ objectFit: "cover"}}/>
        </Link>
    </header>
  );
};
