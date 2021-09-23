(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{644:function(e,t,r){"use strict";r.r(t);var o=r(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"publish-your-subquery-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publish-your-subquery-project"}},[e._v("#")]),e._v(" Publish your SubQuery project")]),e._v(" "),r("h2",{attrs:{id:"benefits-of-hosting-your-project-with-subquery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-hosting-your-project-with-subquery"}},[e._v("#")]),e._v(" Benefits of hosting your project with SubQuery")]),e._v(" "),r("ul",[r("li",[e._v("We'll run your SubQuery projects for you in a high performance, scalable, and managed public service")]),e._v(" "),r("li",[e._v("This service is being provided to the community for free!")]),e._v(" "),r("li",[e._v("You can make your projects public so that they'll be listed in the "),r("a",{attrs:{href:"https://explorer.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Explorer"),r("OutboundLink")],1),e._v(" and anyone around the world can view them")]),e._v(" "),r("li",[e._v("We're integrated with GitHub, so anyone in your GitHub organisations will be able to view shared organisation projects")])]),e._v(" "),r("h2",{attrs:{id:"create-your-first-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-project"}},[e._v("#")]),e._v(" Create your First Project")]),e._v(" "),r("h4",{attrs:{id:"login-to-subquery-projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#login-to-subquery-projects"}},[e._v("#")]),e._v(" Login to SubQuery Projects")]),e._v(" "),r("p",[e._v("Before starting, please make sure that your SubQuery project is online in a public GitHub repository. The "),r("code",[e._v("schema.graphql")]),e._v(" file must be in the root of your directory.")]),e._v(" "),r("p",[e._v("To create your first project, head to "),r("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("project.subquery.network"),r("OutboundLink")],1),e._v(". You'll need to authenticate with your GitHub account to login.")]),e._v(" "),r("p",[e._v("On first login, you will be asked to authorize SubQuery. We only need your email address to identify your account, and we don't use any other data from your GitHub account for any other reasons. In this step, you can also request or grant access to your GitHub Organization account so you can post SubQuery projects under your GitHub Organization instead of your personal account.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/project_auth_request.png",alt:"Revoke approval from a GitHub account"}})]),e._v(" "),r("p",[e._v("SubQuery Projects is where you manage all your hosted projects uploaded to the SubQuery platform. You can create, delete, and even upgrade projects all from this application.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-dashboard.png",alt:"Projects Login"}})]),e._v(" "),r("p",[e._v("If you have a GitHub Organization accounts connected, you can use the switcher on the header to change between your personal account and your GitHub Organization account. Projects created in a GitHub Organization account are shared between members in that GitHub Organization. To connect your GitHub Organization account, you can "),r("a",{attrs:{href:"#add-github-organization-account-to-subquery-projects"}},[e._v("follow the steps here")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-account-switcher.png",alt:"Switch between GitHub accounts"}})]),e._v(" "),r("h4",{attrs:{id:"create-your-first-project-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-project-2"}},[e._v("#")]),e._v(" Create your First Project")]),e._v(" "),r("p",[e._v("Let's start by clicking on \"Create Project\". You'll be taken to the New Project form. Please enter the following (you can change this in the future):")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("GitHub account:")]),e._v(" If you have more than one GitHub account, select which account this project will be created under. Projects created in a GitHub organisation account are shared between members in that organisation.")]),e._v(" "),r("li",[r("strong",[e._v("Name")])]),e._v(" "),r("li",[r("strong",[e._v("Subtitle")])]),e._v(" "),r("li",[r("strong",[e._v("Description")])]),e._v(" "),r("li",[r("strong",[e._v("GitHub Repository URL:")]),e._v(" This must be a valid GitHub URL to a public repository that has your SubQuery project. The "),r("code",[e._v("schema.graphql")]),e._v(" file must be in the root of your directory ("),r("RouterLink",{attrs:{to:"/create/introduction.html#directory-structure"}},[e._v("learn more about the directory structure")]),e._v(").")],1),e._v(" "),r("li",[r("strong",[e._v("Hide project:")]),e._v(" If selected, this will hide the project from the public SubQuery explorer. Keep this unselected if you want to share your SubQuery with the community!\n"),r("img",{attrs:{src:"/assets/img/projects-create.png",alt:"Create your first Project"}})])]),e._v(" "),r("p",[e._v("Create your project and you'll see it on your SubQuery Project's list. "),r("em",[e._v("We're almost there! We just need to deploy a new version of it.")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-no-deployment.png",alt:"Created Project with no deployment"}})]),e._v(" "),r("h4",{attrs:{id:"deploy-your-first-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-first-version"}},[e._v("#")]),e._v(" Deploy your first Version")]),e._v(" "),r("p",[e._v("While creating a project will setup the display behaviour of the project, you must deploy a version of it before it becomes operational. Deploying a version triggers a new SubQuery indexing operation to start, and sets up the required query service to start accepting GraphQL requests. You can also deploy new versions to existing projects here.")]),e._v(" "),r("p",[e._v("With your new project, you'll see a Deploy New Version button. Click this, and fill in the required information about the deployment:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Commit Hash of new Version:")]),e._v(" From GitHub, copy the full commit hash of the version of your SubQuery project codebase that you want deployed")]),e._v(" "),r("li",[r("strong",[e._v("Indexer Version:")]),e._v(" This is the version of SubQuery's node service that you want to run this SubQuery on. See "),r("a",{attrs:{href:"https://www.npmjs.com/package/@subql/node",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@subql/node")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("Query Version:")]),e._v(" This is the version of SubQuery's query service that you want to run this SubQuery on. See "),r("a",{attrs:{href:"https://www.npmjs.com/package/@subql/query",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("@subql/query")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://static.subquery.network/media/projects/projects-first-deployment.png",alt:"Deploy your first Project"}})]),e._v(" "),r("p",[e._v("If deployed successfully, you'll see the indexer start working and report back progress on indexing the current chain. This process may take time until it reaches 100%.")]),e._v(" "),r("h2",{attrs:{id:"next-steps-connect-to-your-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps-connect-to-your-project"}},[e._v("#")]),e._v(" Next Steps - Connect to your Project")]),e._v(" "),r("p",[e._v("Once your deployment has succesfully completed and our nodes have indexed your data from the chain, you'll be able to connect to your project via the displayed GraphQL Query endpoint.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-deploy-sync.png",alt:"Project being deployed and synced"}})]),e._v(" "),r("p",[e._v("Alternatively, you can click on the three dots next to the title of your project, and view it on SubQuery Explorer. There you can use the in-browser playground to get started - "),r("RouterLink",{attrs:{to:"/query/query.html"}},[e._v("read more about how to user our Explorer here")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-explorer.png",alt:"Projects in SubQuery Explorer"}})]),e._v(" "),r("h2",{attrs:{id:"add-github-organization-account-to-subquery-projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-github-organization-account-to-subquery-projects"}},[e._v("#")]),e._v(" Add GitHub Organization Account to SubQuery Projects")]),e._v(" "),r("p",[e._v("It is common to publish your SubQuery project under the name of your GitHub Organization account rather than your personal GitHub account. At any point your can change your currently selected account on "),r("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),r("OutboundLink")],1),e._v(" using the account switcher.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/projects-account-switcher.png",alt:"Switch between GitHub accounts"}})]),e._v(" "),r("p",[e._v("If you can't see your GitHub Organization account listed in the switcher, the you may need to grant access to SubQuery for your GitHub Organization (or request it from an administrator). To do this, you first need to revoke permissions from your GitHub account to the SubQuery Application. To do this, login to your account settings in GitHub, go to Applications, and under the Authorized OAuth Apps tab, revoke SubQuery - "),r("a",{attrs:{href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth",target:"_blank",rel:"noopener noreferrer"}},[e._v("you can follow the exact steps here"),r("OutboundLink")],1),e._v(". "),r("strong",[e._v("Don't worry, this will not delete your SubQuery project and you will not lose any data.")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/project_auth_revoke.png",alt:"Revoke access to GitHub account"}})]),e._v(" "),r("p",[e._v("Once you have revoked access, log out of "),r("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),r("OutboundLink")],1),e._v(" and log back in again. You should be redirected to a page titled "),r("em",[e._v("Authorize SubQuery")]),e._v(" where you can request or grant SubQuery access to your GitHub Organization account. If you don't have admin permissions, you must make a request for an adminstrator to enable this for you.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/project_auth_request.png",alt:"Revoke approval from a GitHub account"}})]),e._v(" "),r("p",[e._v("Once this request has been approved by your administrator (or if are able to grant it youself), you will see the correct GitHub Organization account in the account switcher.")])])}),[],!1,null,null,null);t.default=a.exports}}]);