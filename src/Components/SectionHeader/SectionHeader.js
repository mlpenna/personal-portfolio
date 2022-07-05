import "./SectionHeader.css";

function SectionHeader({ sid, sindex, name }) {
  return (
    <div className="section-header">
        <h1>
          <span className="text-header-accent">{sindex}. </span>
          {name}
        </h1>
    </div>
  );
}

export default SectionHeader;
