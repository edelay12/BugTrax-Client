import React from "react";
import "./issue-item.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/fontawesome-free-regular";

export default function IssueItem({ issue }) {
  return (
    <div className="Issue-item">
      <div className="Issue-item-left">
        <div
          className={`issue-item-severity-indicator Issue-${issue.severity}`}
        ></div>
        <span className="Issue-item-id">
          <b>Id:</b> {issue.id}
        </span>
        <span className="Issue-item-priority">{issue.priority}</span>
      </div>
      <div className="Issue-item-right">
        <Link to={`/dashboard/issues/${issue.id}`}>
          <span className="Issue-item-summary">{issue.summary}</span>
        </Link>
        <div className="Issue-item-right-bottom-row">
          <span className="Issue-item-category">{issue.category}</span>
          <span className="Issue-item-hyph"> - </span>
          <span className="Issue-item-date">
            <FontAwesomeIcon className="fa-Te" icon={faClock} />
            {issue.date_updated}
          </span>
        </div>
      </div>
    </div>
  );
}
