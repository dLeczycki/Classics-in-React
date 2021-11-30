import {useDispatch} from 'react-redux';

import CommentsList from "./components/CommentsList/CommentsList";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import { fetchComments } from './state/actions/commentsActions';


function App() {
  const dispatch = useDispatch();
  dispatch(fetchComments());

  return (
    <main>
      <CommentsList/>
      <CommentsForm />
    </main>
  );
}

export default App;
