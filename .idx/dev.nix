{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "pnpm"
          "next"
          "dev"
          "-H"
          "0.0.0.0"
          "-p"
          "$PORT"
        ];
        manager = "web";
      };
    };
  };
}