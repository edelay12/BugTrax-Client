import React, { useContext } from "react";
import "./overview-cards.css";
import MainContext from "../../../contexts/main-context";

export default function OverviewCards() {
  const ContextMain = useContext(MainContext)
  return (
    <section className="Overview-cards-container">
      <div className="O-card blue">
        <div className="O-card-in">
          <div className="O-card-in-left">
            <span className="O-card-title">New Issues</span>
            <span className="O-card-number">{ContextMain.newIssues.length}</span>
          </div>
          <div className="O-card-in-right">
            <svg xmlns="http://www.w3.org/2000/svg" className="O-card-icon" viewBox="0 0 512 512"><path d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zM400 144H112a16 16 0 010-32h288a16 16 0 010 32zM419.13 448H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z"></path></svg>
          </div>
        </div>

        <div className="O-card-footer">
          <span>Placeholder</span>
        </div>
      </div>

      <div className="O-card green">
        <div className="O-card-in">
          <div className="O-card-in-left">
            <span className="O-card-title">Team Members</span>
            <span className="O-card-number">{ContextMain.teamList.length}</span>
          </div>
          <div className="O-card-in-right">
            <svg xmlns="http://www.w3.org/2000/svg" className="O-card-icon" viewBox="0 0 512 512"><path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"></path></svg>
          </div>
        </div>

        <div className="O-card-footer">
          <span className="">Placeholder</span>
        </div>
      </div>

      <div className="O-card grey">
        <div className="O-card-in">
          <div className="O-card-in-left">
            <span className="O-card-title">Resolved Issues</span>
            <span className="O-card-number">{ContextMain.resolvedIssues.length}</span>
          </div>
          <div className="O-card-in-right">
            <svg className="O-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"></path><path d="M441.36 226.81L426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"></path><path d="M441.36 330.8l-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"></path></svg>
          </div>
        </div>

        <div className="O-card-footer">
          <span className="">Placeholder</span>
        </div>
      </div>

      <div className="O-card light-blue">
        <div className="O-card-in">
          <div className="O-card-in-left">
            <span className="O-card-title">Open Issues</span>
            <span className="O-card-number">{ContextMain.activeIssues.length}</span>
          </div>
          <div className="O-card-in-right">
    <svg className="O-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0032 272v112a64 64 0 0064 64h320a64 64 0 0064-64V272a16.65 16.65 0 00-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 01-3.92 4.82H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 256H72.65a4 4 0 01-3.92-4.82z"></path></svg>
          </div>
        </div>

        <div className="O-card-footer">
          <span className="">Placeholder</span>
        </div>
      </div>
    </section>
  );
}
