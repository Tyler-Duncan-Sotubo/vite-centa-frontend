import { useEffect } from "react";
import Data from "../../assets/data/header/resourceMenu";
import { NavLink } from "react-router-dom";

const ResourceMenu = ({ megaMenuClass }) => {
  useEffect(() => {
    /*-- Mega menu scripts start --*/
    const homeNav = document.querySelector(".home-nav");

    let megaMenuTab, megaMenuTabContent;

    function onlyDisplayBlock(idName) {
      const item = megaMenuTab.querySelector(`#${idName}`);
      item.style.display = "block";
    }

    function allDisplayNone() {
      megaMenuTabContent.forEach((item) => {
        item.style.display = "none";
      });
    }

    function defaultDisplay() {
      const item = megaMenuTab.querySelector("#primaryText");
      item.style.display = "block";
    }

    if (homeNav) {
      const megaTabLinks = document.querySelectorAll(".megaTablinks");
      megaMenuTab = document.querySelector(".mega-menu-tabcontent");
      megaMenuTabContent = document.querySelectorAll(".megaMenutabcontent");

      megaTabLinks.forEach((item) => {
        const menuData = item.getAttribute("data-menu");
        item.addEventListener("mouseover", () => {
          item.classList.add("menuTabActive");
          allDisplayNone();
          onlyDisplayBlock(menuData);
        });
        item.addEventListener("mouseout", () => {
          item.classList.remove("menuTabActive");
          allDisplayNone();
          defaultDisplay();
        });
      });
    }
    /*-- Mega menu scripts end --*/
  }, []);

  const linkClass = "nav-link";

  return (
    <div className="mega-menu">
      <div className={`mega-menu-card ${megaMenuClass}`}>
        {Data?.map((columnItem, cid) => (
          <div key={cid} className="mega-menu-column">
            {columnItem.menuList && (
              <ul className="mega-menu-list">
                {columnItem.menuList?.map((menuItem, mid) => (
                  <li
                    key={mid}
                    className="megaTablinks"
                    data-menu={menuItem.dataMenu}
                  >
                    {menuItem.file ? (
                      <a
                        className={linkClass}
                        href={menuItem.file}
                        download={menuItem.downloadName || true}
                      >
                        {menuItem.title}
                      </a>
                    ) : (
                      <NavLink className={linkClass} to={menuItem.url}>
                        {menuItem.title}
                      </NavLink>
                    )}
                    {menuItem.tag && (
                      <div className={`tag ${menuItem.tag}`}>
                        {menuItem.tag}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {columnItem.demoCard && (
              <div className="more-demo-card">
                <p>{columnItem.demoCard.title}</p>
                <p>{columnItem.demoCard.title2}</p>
                <img src={columnItem.demoCard.img} alt="img" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceMenu;
