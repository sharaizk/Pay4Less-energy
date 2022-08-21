import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const SingleService = (props) => {
  const { itemClass, icon, IconClass, BtnClass, Title, Desc } = props;
  return (
    <div className={itemClass ? itemClass : "ras-services-item"}>
      <div className="ras-service-info">
        <div className="d-flex flex-column justify-content-between">
          <div
            className={
              IconClass ? IconClass : "ras-service-icon purple-bg-icon"
            }
          >
            <Icon icon={icon} fontSize={48} color="#4d40e1"/>
          </div>
          <div className="ras-service-title-wrap">
            <h3 className="ras-service-title">
              <Link to="/service/service-details">
                {Title ? Title : "Web Developmnt"}
              </Link>
            </h3>
            <p className="ras-service-details">
              {Desc
                ? Desc
                : "According to elite we providing web Development services to our honorable clients for business."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleService;
