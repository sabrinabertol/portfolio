const TimelineItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          <time>{data.date}</time>
          <p>{data.text}</p>
          { data.url && (
              <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.cta}
              </a>
          )}
          <span className="circle" />
      </div>
  </div>
);

export default TimelineItem