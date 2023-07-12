import { useEffect } from "react";

import Sidebar from "@components/Sidebar";
import Welcome from "@components/Welcome";

import store from "@store/index";
import { loadUser } from "@store/modules/user/actions";
import { selectLists } from "@store/modules/lists/selectors";
import { selectUser } from "@store/modules/user/selectors";

import svgToDataUri from "@utils/svg-to-data-uri";

import { useDispatch, useSelector } from "react-redux";

import { ActionCreators } from "redux-undo";

import { Outlet, useNavigate, useParams } from "react-router-dom";
import useHotkeys from "@hooks/useHotkeys";

function AppLayout() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const dispatch = useDispatch();

  const lists = useSelector(selectLists);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (lists.length === 1) return;

    const list = lists.find((l) => (!slug ? l.slug === "" : l.slug === slug));

    if (!list) {
      navigate("/");
      return;
    }

    if (document.title !== `${list.name} · Dona`) {
      document.title = `${list.name} · Dona`;
    }

    const svg = `
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M230 110H170C136.863 110 110 136.863 110 170V230C110 263.137 136.863 290 170 290H230C263.137 290 290 263.137 290 230V170C290 136.863 263.137 110 230 110ZM170 50C103.726 50 50 103.726 50 170V230C50 296.274 103.726 350 170 350H230C296.274 350 350 296.274 350 230V170C350 103.726 296.274 50 230 50H170Z" fill="${
          list.color ?? "#1992FA"
        }" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M190 150C167.909 150 150 167.909 150 190V210C150 232.091 167.909 250 190 250H210C232.092 250 250 232.091 250 210V190C250 167.909 232.092 150 210 150H190Z" fill="${
          list.color ?? "#1992FA"
        }" />
      </svg>
    `;

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";

      document.head.appendChild(link);
    }

    link.href = svgToDataUri(svg);
  }, [lists, navigate, slug]);

  useHotkeys({
    element: document.body,
    hotkeys: [
      {
        ctrlKey: true,
        handler: () => {
          const state = store.getState();

          // since i'm using redux-saga (for learning purposes) for localStorage handling, the hydratation takes two renders and, therefore, redux-undo creates 2 past states
          if (state.lists.past.length > 2) {
            dispatch(ActionCreators.undo());
          }
        },
        key: "Z",
      },
      {
        ctrlKey: true,
        key: "Z",
        handler: () => {
          const state = store.getState();

          if (state.lists.future.length > 0) {
            dispatch(ActionCreators.redo());
          }
        },
        shiftKey: true,
      },
    ],
  });

  return (
    <div className="max-w-screen relative flex h-screen w-full overflow-hidden p-6 sm:p-4 md:p-6 lg:p-8">
      {!user.username && <Welcome />}
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
