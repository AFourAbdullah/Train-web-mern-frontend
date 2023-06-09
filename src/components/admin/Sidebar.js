import React from "react";
import logo from "../../assets/trainLogo.PNG";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem label="Trains" nodeId="1">
          <Link to="/admin/trains">
            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
          </Link>

          <Link to="/admin/train">
            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
          </Link>
        </TreeItem>
      </TreeView>

      <Link to="/admin/tickets">
        <p>
          <ListAltIcon />
          Tickets
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
