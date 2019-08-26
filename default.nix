let euphenix = import (fetchTarball {
  url = https://github.com/manveru/euphenix/archive/b29b1eb4ba3debc9d9db0354ba60d500b7bfecb7.tar.gz;
  sha256 = "0pyg8wfxcr7y76zic0prqbzii0mwmls7y4bybzj9ir0vb8263155";
}) { };
in euphenix.build ./. {
  name = "david-anlagenbetreuung";
  favicon = ./favicon.svg;
  templateDir = ./.;
  routes = { "/index.html" = { template = [ ./index.html ]; }; };
}
