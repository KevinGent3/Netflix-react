const Section = ({ section }) => {
  return (
    <div className="container">
      <main>
        <h2>{section.category}</h2>
        <div className="movies-container">
          {section.images.map((film, index) => {
            return <img src={film} alt="films" />;
          })}
        </div>
      </main>
    </div>
  );
};
export default Section;
