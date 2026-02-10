export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">
        {latest}
      </section>
      <section id="archive-filter">
        {archive}
      </section>
    </div>
  );
}  