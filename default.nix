let
  euphenix = import (fetchTarball {
    url =
      "https://github.com/manveru/euphenix/archive/413caa1e48893eaeffeb081f2aac9123f0306147.tar.gz";
    sha256 = "1y2nqnmdf3yhhjdcnxwkxjblys0y1y0bncis5p0pl166fqyz7kw1";
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
