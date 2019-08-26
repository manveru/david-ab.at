let euphenix = import ~/github/manveru/euphenix { };
in euphenix.build ./. {
  name = "david-anlagenbetreuung";
  favicon = ./favicon.svg;
  templateDir = ./.;
  routes = { "/index.html" = { template = [ ./index.html ]; }; };
}
