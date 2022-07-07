import "./SectionHeader.css";

function SectionHeader({ sid, sindex, name }) {
  return (
    <div className="section-header">
        <h2>
          <span className="text-header-accent">{sindex}. </span>
          {name}
        </h2>
    </div>
  );
}

export default SectionHeader;
