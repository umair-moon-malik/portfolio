import Hero from "@/components/home/Hero";
import Container from "@/components/layout/Container";
import Portrait from "@/components/home/Portrait";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import Experience from "@/components/home/Experience";
import Certificates from "@/components/home/Certificates";

const page = () => {
  return (
    <>
      <Container className="flex flex-row items-center mb-30">
        <Hero />
        <Portrait />
      </Container>
      <Projects />
      <Stack />
      <Experience />
      <Certificates />
    </>
  );
};

export default page;
