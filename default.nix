let
  euphenix = import (fetchTarball {
    url =
      "https://github.com/manveru/euphenix/archive/7d4392f82adada0624f7d4745c375855b460a801.tar.gz";
    sha256 = "0zlr3n4p2j046mhxyc0lh878hj7wyz6kyhb01cbb151n8l0jpgq2";
  }) { };
in {
  euphenix = euphenix.euphenix;

  site = euphenix.build ./. {
    name = "david-anlagenbetreuung";
    favicon = ./favicon.svg;
    templateDir = ./.;
    routes = { "/index.html" = { template = [ ./index.html ]; }; };
  };
}
