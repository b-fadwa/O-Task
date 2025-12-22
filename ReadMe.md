# ✅ OTask Application

This demo app is built with **4D Qodly Pro** and is designed to help teams manage projects, tasks, and incidents in a clear and structured way.


## Purpose

The **OTask Application** centralizes project and task management into a single, intuitive system.  
It helps teams collaborate better by organizing work into boards, tracking tasks, and handling incidents separately.

The application aims to:

- Structure work into **boards (projects)**  
- Track **tasks** and their progress  
- Manage **incidents** independently from tasks  
- Improve team visibility and collaboration  

---

## Main Features

- **Dashboard**: Global overview of boards, tasks, and incidents.  

  ![Dashboard page](Project/Sources/Shared/visuals/DashBoard.png)

- **Boards (Projects)**: Organize work into project-based boards.  

  ![Boards page](Project/Sources/Shared/visuals/AllBoards.png)

- **Task Management**: Create, assign, and track tasks with clear statuses.  

  ![Tasks page](Project/Sources/Shared/visuals/TasksNormalView.png)

- **Incident Management**: Log, monitor, and resolve incidents efficiently.  

  ![Incidents page](Project/Sources/Shared/visuals/Incidents.png)

- **Role-Based Access**: Access and visibility adapted to user roles.

## How to Run

### Pre-requisites (4D Software)
- Download the latest Release version of 4D:  
  https://us.4d.com/product-download/Feature-Release  
- Or the latest Beta version:  
  https://discuss.4d.com/  
- Follow activation steps:  
  https://developer.4d.com/docs/GettingStarted/installation  

### Steps to Run the Project
- Clone or download this repository to your local machine.  
- Open the project in 4D: **File > Open Project**  
- Open **Qodly Studio**: **Design > Qodly Studio**  
- Click **Run** to start the server and preview the app in your browser.

---

## Configuration & Credentials

### Do I need to create external accounts?
- **Mailing (optional)**: Required only if you want email notifications (task or incident reminders).
  - SMTP-compatible services such as **SendGrid SMTP** can be used.

### Where does the app read credentials?
- Mailing credentials are loaded from an `env.json` file located in the **credentials** folder.
- This file contains SMTP configuration such as host, port, user, and password.

Example format:

![Credentials file format](Project/Sources/Shared/visuals/envFormat.png)

### Security Best Practices
- Do not commit real credentials to source control.
- Add `env.json` to `.gitignore`.
- Inject secrets securely at deploy time.

---

## Test Accounts and Sample Data

Sample data can be generated via a dedicated data generator function or from the UI.


---

## Where to Find the Code for Each Feature

- **Authentication & Roles**
  - Server: `DataStore.4dm`
  - UI: `SignIn.WebForm` / `HomePage.WebForm`

- **Boards**
  - UI: `BoardAllProjects.WebForm`,`BoardArchived.WebForm`,`BoardPrivate.WebForm`,`BoardPublic.WebForm`
  - Server/Data: `Board.4dm`, `BoardEntity.4dm`

- **Tasks**
  - UI: `TasksDisplay1.WebForm`,`TasksDisplay2.WebForm`,`TasksDisplay3.WebForm`,`DisplayTask.WebForm`,`DisplayTaskFromDashboard.WebForm`,`EditTask.WebForm`
  - Server/Data: `Task.4dm`, `TaskEntity.4dm`,`TaskSelection.4dm`,`TaskIncident.4dm`,`TaskTag.4dm`

- **Incidents**
  - UI: `Incidents.WebForm`,`NewIncident.WebForm`,`DetailIncident.WebForm`
  - Server/Data: `Incident.4dm`, `IncidentEntity.4dm`

- **Dashboard**
  - UI: `DashboardPage.WebForm`

---

This structure allows you to easily customize, extend, or reuse **OTask** as a foundation for your own project, task, and incident management solutions.
