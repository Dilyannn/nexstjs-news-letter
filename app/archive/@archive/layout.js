import YearNavArchive from "@/components/YearNavArchive.jsx";

export default function Archive({ children }) {
  return (
    <header id="archive-header">
      <YearNavArchive />
      {children}
    </header>
  );
}