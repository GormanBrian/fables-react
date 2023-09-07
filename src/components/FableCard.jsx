export default function FableCard({
  title,
  image,
  description,
  author,
  lastUpdated,
}) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <span>
        {author} {lastUpdated}
      </span>
    </div>
  );
}
