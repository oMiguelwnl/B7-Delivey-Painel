"use client";
import { Header } from "@/components/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0 }}>
        <Header />
        <Container component="section" maxWidth="lg">
          {children}
        </Container>
      </body>
    </html>
  );
};
export default Layout;
