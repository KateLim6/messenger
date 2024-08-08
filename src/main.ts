import Handlebars from "handlebars";
import * as Pages from "./pages";
import * as Components from "./components";

const pages = {
  navigation: [Pages.NavigatePage],
  login: [Pages.LoginPage],
  registration: [Pages.RegistrationPage],
  profile: [Pages.ProfilePage],
  list: [Pages.ChatsListPage],
  chat: [Pages.ChatPage],
  error: [Pages.ErrorPage],
  server: [Pages.ServerErrorPage],
  edit: [Pages.EditUserPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;
  container.innerHTML = Handlebars.compile(source)(context);
}
document.addEventListener("DOMContentLoaded", () => navigate("navigation"));

document.addEventListener("click", (e) => {
  //@ts-ignore
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
