import { API, endpoints } from "../api/index";
class ProjectService {
  static createProject(project) {
    return API.post(endpoints.api.project.create, project);
  }
  static updateProject(id, project) {
    return API.put(endpoints.api.project.update + id, project);
  }
  static deleteProject(id) {
    return API.delete(endpoints.api.project.delete + id);
  }
  static fetchOneProject(id) {
    return API.get(endpoints.api.project.getone + id);
  }

  static projectStatistic() {
    return API.get(endpoints.api.project.projectStatistic);
  }
  static getProjectAll(key) {
    return API.get(endpoints.api.project.getProjectAll + key);
  }
  static fetchAllProject() {
    return API.get(endpoints.api.project.getAll);
  }
}

export default ProjectService;
