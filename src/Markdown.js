import React from "react";

import ReactMarkdown from "markdown-to-jsx";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const options = {
  overrides: {
    h1: {
      component: props => <Typography gutterBottom variant="h3" {...props} />
    },
    h2: {
      component: props => <Typography gutterBottom variant="h4" {...props} />
    },
    h3: {
      component: props => <Typography gutterBottom variant="h5" {...props} />
    },
    h4: {
      component: props => <Typography gutterBottom variant="h6" {...props} />
    },
    p: { component: props => <Typography variant="body1" {...props} /> },
    a: { component: Link },
    li: {
      component: props => (
        <li>
          <Typography component="span" {...props} />
        </li>
      )
    }
  }
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
