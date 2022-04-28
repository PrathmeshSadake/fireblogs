import { Container, Typography } from '@mui/material';
import React from 'react';

const Article = () => {
  return (
    <Container>
      <Typography variant='h3' gutterBottom sx={{ fontWeight: 'bold' }}>
        PART 5: Adding User Authentication to Your Node API
      </Typography>
      <Typography variant='body2' gutterBottom>
        Sylva Elendu
      </Typography>
      <Typography variant='body2' gutterBottom>
        Jul 10, 2018
      </Typography>
      <Typography variant='body1' gutterBottom>
        Everything about adding user authentication and protecting endpoints.
      </Typography>
      <img
        src='
      https://miro.medium.com/max/1400/1*-2XZRHZqHQ_sC_bdDicHIg.jpeg'
        alt=''
        width={'100%'}
      />
      <Typography variant='body1' gutterBottom>
        This is the fifth article in this series. It is recommended you continue
        with this article if you already have a working API built using Node,
        Express and MongoDB. If you don’t, allow me to work you through what
        we’ve done so far. The first article covers the purpose of the series
        and about the application we’re building in the process. The second
        article shares what and how to set up your development environment
        optimizing the right tools. The third article details out how we
        developed CRUD operations for our application. The fourth article
        simplifies deploying our application and database to Heroku and mLab. In
        this article, we will be adding one more feature to our application. So,
        let’s get started already. Our application at this point can only
        perform Create, Retrieve, Update, and Delete operations, what we will
        want to do is enable users to sign up and also login. This is pretty
        easy but it can get a bit tricky. So, let’s handle the complexities
        first before we write any line of code. Enabling user signup/login in
        our application means that users will be required to submit some
        personal data, say username and password. What happens if two unique
        users submit same username, does the server merge them as one? Or what
        happens when our database is compromised, does this mean all of our
        users’ passwords will be left naked in the open? Here’s a simple read on
        password security. Ensuring your users’ passwords isn’t just hashed but
        salted is a better way to secure your users’ privacy. We will use bcrypt
        in this application. Which brings us to the next question, what happens
        when the user provides a valid username and password? What do we (the
        server) supply to the user that enables this user’s access certain
        protected route? How do we verify this user is authorized to access
        certain information? Just like any circle, certain privileges are
        usually reserved to authorized persons and restricted from the public
        consumption. We will use JWT for this. You ready for some codes? Let’s
        do this. If you followed through with all the articles, you should be in
        the master branch by default. Note: You should never code in your master
        branch, you know the drill. Checkout to develop, and then checkout to a
        new branch. Next, npm install bcrypt and jsonwebtoken.
      </Typography>
    </Container>
  );
};

export default Article;
